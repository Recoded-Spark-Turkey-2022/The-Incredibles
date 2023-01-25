import React from 'react';
import Messages from '../Messages';
import SendInput from '../SendInput';
import { useSelector } from 'react-redux';

function Chat() {
  const { chat } = useSelector((state) => state);
  const { chatId, chatUser } = chat;

  return (
    <div className=" w-full relative overflow-hidden">
      <div className="p-2 flex items-center justify-center bg-gray-300">
        <img
          src={chatUser && chatUser.photoURL}
          alt="userProfil"
          className="w-16 h-16 rounded-full mr-2 "
        />
        <div>
          <p className="text-black font-bold text-3xl">
            {chatUser && chatUser.name}
          </p>
        </div>
      </div>
      <Messages />
      <SendInput />
    </div>
  );
}

export default Chat;
