import React from 'react';
import Messages from '../Messages';
import SendInput from '../SendInput';
import { useSelector } from 'react-redux';

function Chat() {
  const { chat } = useSelector((state) => state);
  const { chatUser } = chat;

  return (
    <div className=" w-full relative overflow-hidden">
      <div className="p-2 flex items-center justify-center bg-gray-300">
        <img
          src={chatUser.photoURL ? chatUser.photoURL:chatUser.authPhoto}
          className="w-16 h-16 rounded-full mr-2 "
        />
        <div>
          <p className="text-black font-bold text-3xl">
            {chatUser && chatUser.name ? chatUser.name : chatUser.username}
          </p>
        </div>
      </div>
      <Messages />
      <SendInput />
    </div>
  );
}

export default Chat;
