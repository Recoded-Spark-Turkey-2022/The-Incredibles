import React from 'react'
import Messages from '../Messages'
import SendInput from '../SendInput'

function Chat() {
  return (
    <div className=' w-full relative overflow-hidden'>
        <div className="p-2 flex items-center justify-center bg-gray-300"  >
        <img
          src="https://pixlr.com/images/index/remove-bg.webp"
          alt="userProfil"
          className="w-16 h-16 rounded-full mr-2 "
        />
        <div>
          <p className="text-black font-bold text-3xl">Ahmad Al Hariri</p>
        </div>
      </div>
      <Messages/>
      <SendInput/>
    </div>
  )
}

export default Chat