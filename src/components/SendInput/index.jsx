import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import ChangePhoto from '../../assets/pics/profilepage/changepic.svg';
import Images from '../../assets/pics/chatpage/images.svg';
import Remove from '../../assets/pics/chatpage/delete.svg';
import Send from '../../assets/pics/chatpage/send.svg';
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

function SendInput() {
  const { chat } = useSelector((state) => state);
  const { user } = useSelector(selectUser);
  const { chatUser, chatId } = chat;
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = await uploadBytesResumable(storageRef, img);

      await getDownloadURL(uploadTask.ref).then(async (downloadURL) => {
        await updateDoc(doc(db, 'chats', chatId), {
          messages: arrayUnion({
            text,
            senderId: user.id,
            date: Timestamp.now(),
            photo: downloadURL,
          }),
        });
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
    <form
      onSubmit={(e) => {
        e.preventDefault(), handleSend;
      }}
      className="bg-white absolute w-full flex justify-between gap-8 bottom-0 h-20 max-sm:gap-0 p-4"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Type your message...."
        className="w-full pl-4 bg-gray-200 placeholder:bg-gray-200 outline-none rounded-lg placeholder:p-4 max-sm:placeholder:p-2 max-sm:placeholder:text-sm max-sm:w-"
      />

      {img && (
        <div className="relative">
          {' '}
          <img
            className="w-14 h-14"
            src={URL.createObjectURL(img)}
            alt="img"
          />{' '}
          <img
            onClick={() => setImg(null)}
            className="w-4 h-4 absolute top-0 right-0 cursor-pointer"
            src={Remove}
            alt="delete"
          />{' '}
        </div>
      )}
      <div className="flex gap-4">
        <input
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
          style={{ display: 'none' }}
          id="file"
        />
        <label htmlFor="file">
          <img
            className="w-16 h-16 block pb-4 cursor-pointer max-sm:hidden hover:w-20 duration-500"
            src={ChangePhoto}
            alt="share"
          />
          <img
            className="w-8 h-8 mt-2 hover:w-12 duration-500 cursor-pointer mx-2 hidden max-sm:flex"
            src={Images}
            alt="share"
          />
        </label>
        <button
          type="submit"
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg max-sm:hidden"
        >
          send
        </button>
        <img
          src={Send}
          alt="send"
          className="hidden hover:w-10 duration-500 cursor-pointer max-sm:flex w-6"
          onClick={handleSend}
        />
      </div>
    </form>
  );
}

export default SendInput;
