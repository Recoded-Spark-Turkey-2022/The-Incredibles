import React from 'react';

function ChatSearch() {
  return (
    <div className="border-b border-gray-400 h-fit pb-2">
      <input
        type="search"
        className="bg-transparent m-5 outline-none  text-white placeholder:text-gray-200"
        placeholder="Type user name..."
      />
      <div className=" items-center cursor-pointer hover:bg-cyan-800 hidden">
        <img
          src="https://pixlr.com/images/index/remove-bg.webp"
          alt="userProfil"
          className="w-12 h-12 rounded-full mr-2 "
        />
        <div>
          <p className="text-white ">Ahmad Al Hariri</p>
        </div>
      </div>
    </div>
  );
}

export default ChatSearch;
