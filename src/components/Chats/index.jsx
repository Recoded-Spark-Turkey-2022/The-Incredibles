import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import { db } from '../../firebase/firebase';
import { getChat } from '../../features/chat/chatSlice';

function Chats() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', user.id), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    user.id && getChats();
  }, [user.id]);

  return (
    <div className="pt-4 overflow-auto scroll-smooth flex flex-col gap-8">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          return (
            <div
              className="flex items-center cursor-pointer hover:bg-cyan-800"
              key={chat[0]}
              onClick={() =>
                dispatch(getChat({ data: chat[1].userInfo, id: chat[0] }))
              }
            >
              <img
                src={
                  chat[1].userInfo.photoURL
                    ? chat[1].userInfo.photoURL
                    : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                }
                alt="userProfil"
                className="w-12 h-12 rounded-full mr-2 "
              />
              <div>
                <p className="text-white ">{chat[1].userInfo.name}</p>
                <p className="text-sm text-gray-200">
                  {chat[1].lastMessage && chat[1].lastMessage.text}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Chats;
