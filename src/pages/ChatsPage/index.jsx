import React from 'react';
import Chat from '../../components/Chat';
import ChatSidebar from '../../components/ChatSidebar';

function ChatsPage() {
  return (
    <div className="w-full h-screen relative   rounded-xl  overflow-hidden flex">
      <ChatSidebar />
      <Chat />
    </div>
  );
}

export default ChatsPage;
