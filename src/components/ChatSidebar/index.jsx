import React, { useState } from 'react';
import Chats from '../Chats';
import ChatSearch from '../ChatSearch';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import ChatsIcon from '../../assets/pics/chatpage/chats.svg';
import Back from '../../assets/pics/navbar/back.svg';

function ChatSidebar() {
  const { user } = useSelector(selectUser);
  const [open, setOpen] = useState(true);

  return (
    <>
      <div
        className={` overflow-y-auto bg-slate-300 border-r w-1/4 max-md:min-w-full h-[90vh] max-md:${
          open ? '' : 'hidden'
        }`}
      >
        <div className="p-2 flex justify-start items-center gap-2 bg-slate-300 ">
          <div className=" ">
            <img
              src={user.photoURL ? user.photoURL : user.authPhoto}
              alt="userProfil"
              className="min-w-[60px]  m-auto max-h-[60px] border rounded-full  "
            />
          </div>

          <div className="">
            <p className="text-black font-bold">
              {user.username
                ? user.username + ' ' + user.usersurname
                : user.displayName}
            </p>
            <p className="text-gray-700 text-center">{user.biography}</p>
          </div>
        </div>
        <ChatSearch setOpen={setOpen} />
        <Chats setOpen={setOpen} />
      </div>
      <img
        onClick={() => setOpen(!open)}
        src={open ? Back : ChatsIcon}
        alt="chatIcon"
        className={
          open
            ? 'w-6  right-5 top-6 absolute md:hidden'
            : 'w-6 h-6 absolute right-5 top-5 z-10 md:hidden '
        }
      />
    </>
  );
}

export default ChatSidebar;
