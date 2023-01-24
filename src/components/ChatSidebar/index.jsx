import React from 'react';
import Chats from '../Chats';
import ChatSearch from '../ChatSearch';

function ChatSidebar() {
  return (
    <div className="bg-cyan-700  w-1/4">
      <div className="p-2 flex items-center bg-cyan-900">
        <img
          src="https://pixlr.com/images/index/remove-bg.webp"
          alt="userProfil"
          className="w-16 h-16 rounded-full mr-2 "
        />
        <div>
          <p className="text-white font-bold">Ahmad Al Hariri</p>
          <p>alhamdu allah</p>
        </div>
      </div>
      <ChatSearch/>
      <Chats/>
    </div>
  );
}

export default ChatSidebar;
