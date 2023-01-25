import React, { useState } from 'react';
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  getDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';

import { getChat } from '../../features/chat/chatSlice';

function ChatSearch() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  const [userName, setUserName] = useState('');
  const [theUser, setTheUser] = useState(null);
  const handleSearch = async () => {
    const q = query(collection(db, 'users'), where('username', '==', userName));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setTheUser(doc.data());
      });
    } catch {
      (error) => console.log(error);
    }
  };

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };

  const handleSelect = async () => {
    const chatId =
      user.id > theUser.id ? user.id + theUser.id : theUser.id + user.id;
    const res = await getDoc(doc(db, 'chats', chatId));
    if (!res.exists()) {
      await setDoc(doc(db, 'chats', chatId), { messages: [] });
      await updateDoc(doc(db, 'userChats', user.id), {
        [chatId + '.userInfo']: {
          id: theUser.id,
          name: theUser.username,
          photoURL: theUser.photoURL
            ? theUser.photoURL
            : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
        },
        [chatId + '.date']: serverTimestamp(),
      });
      await updateDoc(doc(db, 'userChats', theUser.id), {
        [chatId + '.userInfo']: {
          id: user.id,
          name: user.username,
          photoURL: user.photoURL,
        },
        [chatId + '.date']: serverTimestamp(),
      });
      dispatch(getChat({ data: theUser, id: chatId }));
    } else {
      dispatch(getChat({ data: theUser, id: chatId }));
    }
    setTheUser(null);
    setUserName('');
  };

  return (
    <div className="border-b border-gray-400 h-fit pb-2">
      <input
        onKeyDown={handleKey}
        onChange={(e) => setUserName(e.target.value)}
        type="search"
        className="bg-transparent m-5 outline-none  text-white placeholder:text-gray-200"
        placeholder="Type user name..."
        value={userName}
      />
      {theUser && (
        <div
          className=" items-center cursor-pointer hover:bg-cyan-800"
          onClick={handleSelect}
        >
          <img
            src={
              theUser.photoURL
                ? theUser.photoURL
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
            }
            alt="userProfil"
            className="w-12 h-12 rounded-full mr-2 "
          />
          <div>
            <p className="text-white ">
              {theUser.username + theUser.usersurname}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatSearch;