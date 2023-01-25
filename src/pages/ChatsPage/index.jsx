import React from 'react';
import Chat from '../../components/Chat';
import ChatSidebar from '../../components/ChatSidebar';

function ChatsPage() {
  return (
    <div className="w-full h-screen p-4 bg-blue-900 rounded-xl  overflow-hidden flex">
      <ChatSidebar />
      <Chat />
    </div>
  );
}

export default ChatsPage;
