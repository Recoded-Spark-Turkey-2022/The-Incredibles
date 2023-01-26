import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import ChangePhoto from '../../assets/pics/profilepage/changepic.svg';
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
      className="bg-gray-300  w-full flex justify-between gap-8 bottom-0 h-20  p-4"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Type your message...."
        className="w-full outline-none rounded-lg placeholder:p-4"
      />
      <div className="flex gap-4">
        <input
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
          style={{ display: 'none' }}
          id="file"
        />
        <label htmlFor="file">
          <img className="w-12 h-12" src={ChangePhoto} alt="share" />
        </label>
        <button
          type="submit"
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          send
        </button>
      </div>
    </form>
  );
}

export default SendInput;
