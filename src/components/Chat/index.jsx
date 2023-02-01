import React from 'react';
import Messages from '../Messages';
import SendInput from '../SendInput';
import { useSelector } from 'react-redux';
import Call from '../../assets/pics/chatpage/call.svg';
import VideoCall from '../../assets/pics/chatpage/videoCall.svg';
import ChatMenu from '../../assets/pics/chatpage/chatMenu.svg';

function Chat({open, setOpen}) {
  const { chat } = useSelector((state) => state);
  const { chatUser } = chat;
  if (chatUser.id) {
    return (
      <div className=" drop-shadow-lg  h-[90vh] w-full max-md:h-[90vh] max-md:min-w-full  relative overflow-hidden">
        <div className="flex justify-between  items-center bg-white ">
          <div className="p-2 flex items-center ">
            <img
              src={chatUser.photoURL ? chatUser.photoURL : chatUser.authPhoto}
              className="w-16 h-16 max-md:w-12 max-md:h-12 rounded-full mr-2 "
            />
            <div>
              <p className="text-black font-bold text-lg">
                {chatUser && chatUser.name ? chatUser.name : chatUser.username}
              </p>
            </div>
          </div>
          <div className="flex justify-around ">
            <img
              className="w-8 h-8 mr-6 max-md:hidden "
              src={Call}
              alt="call icon"
            />
            <img
              className="w-8 h-8 mr-6 max-md:hidden"
              src={VideoCall}
              alt="video call icon"
            />
            <img
              className="w-8 h-8 mr-6 max-md:hidden"
              src={ChatMenu}
              alt="chat menu icon"
            />
          </div>
        </div>

        <Messages />
        <SendInput />
      </div>
    );
  }
  else if(!open && !chatUser.id){
    return(
    <div className='h-16 cursor-pointer w-full justify-center  flex items-center' onClick={()=>setOpen(true)}>
      <p className="text-black text-3xl font-bold  ">Click to select chat </p>
    </div>
    )
  }
}

export default Chat;
