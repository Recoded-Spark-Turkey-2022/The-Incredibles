import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import ChangePhoto from '../../assets/pics/profilepage/changepic.svg';
// import Images from '../../assets/pics/chatpage/images.svg';
import Remove from '../../assets/pics/chatpage/delete.svg';
import Send from '../../assets/pics/chatpage/send.svg';
import Emoji from '../../assets/pics/chatpage/emoji.svg';
import { AiOutlineSend } from 'react-icons/ai';
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import Picker from 'emoji-picker-react';
import { useTranslation } from 'react-i18next';

function SendInput() {
  const [t] = useTranslation();
  const { chat } = useSelector((state) => state);
  const { user } = useSelector(selectUser);
  const { chatUser, chatId } = chat;
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const [openEmoji, setOpenEmoji] = useState(false);
  const handleSend = async () => {
    if (img) {
      await updateDoc(doc(db, 'chats', chatId), {
        messages: arrayUnion({
          text,
          senderId: user.id,
          date: Timestamp.now(),
          photo: downloadURL,
        }),
      });
    } else {
      await updateDoc(doc(db, 'chats', chatId), {
        messages: arrayUnion({
          text,
          senderId: user.id,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, 'userChats', user.id), {
      [chatId + '.lastMessage']: { text },
      [chatId + '.date']: serverTimestamp(),
    });
    await updateDoc(doc(db, 'userChats', chatUser.id), {
      [chatId + '.lastMessage']: { text },
      [chatId + '.date']: serverTimestamp(),
    });
    setImg(null);
    setText('');
  };

  return (
    <>
      <span className={openEmoji ? 'absolute bottom-20 ' : 'hidden'}>
        <Picker
          searchDisabled={true}
          onEmojiClick={(event, emojiObject) => {
            setText(text + emojiObject.emoji);
          }}
        />
      </span>
      <form
        onSubmit={(e) => {
          if (chatId) {
            e.preventDefault(), handleSend();
          } else {
            e.preventDefault(), alert('really!! who are you sending to?!!');
          }
        }}
        className="bg-white absolute w-full flex justify-between gap-1 bottom-0 h-20 max-md :gap-0 py-4"
      >
        <img
          onClick={() => setOpenEmoji(!openEmoji)}
          className="w-8 mx-1 cursor-pointer"
          src={Emoji}
          alt=""
        />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder={t('message.sendinput.typeyourmassage')}
          className="w-full bg-gray-200 placeholder:bg-gray-200 outline-none rounded-lg placeholder:p-4 max-md:placeholder:p-2 max-md:placeholder:text-md px-5"
        />

        {img && (
          <div className="relative">
            {' '}
            <img className="w-14 h-14" src={img} alt="img" />{' '}
            <img
              onClick={() => setImg(null)}
              className="w-4 h-4 absolute top-0 right-0 cursor-pointer"
              src={Remove}
              alt="delete"
            />{' '}
          </div>
        )}
        <div className="flex gap-1 px-1 items-center">
          <input
            onChange={async (e) => {
              const storageRef = ref(storage, uuid());
              const uploadTask = await uploadBytesResumable(
                storageRef,
                e.target.files[0]
              );
              getDownloadURL(uploadTask.ref).then(async (downloadURL) => {
                setImg(downloadURL);
              });
            }}
            type="file"
            style={{ display: 'none' }}
            id="file"
          />
          <label htmlFor="file">
            <img
              className="w-16 h-16 block cursor-pointer  duration-500"
              src={ChangePhoto}
              alt="share"
            />
          </label>
          <button
            disabled={text === '' && !img ? true : false}
            className="bg-[#4699C2]  h-12 w-14 text-center m-auto  hover:bg-blue-700 text-white font-bold  rounded-lg "
          >
            <div className="">
              <AiOutlineSend className="m-auto" />
            </div>
          </button>
        </div>
      </form>
    </>
  );
}

export default SendInput;
