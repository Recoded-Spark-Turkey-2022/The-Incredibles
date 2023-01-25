import React from 'react';
import Chats from '../Chats';
import ChatSearch from '../ChatSearch';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';

function ChatSidebar() {
  const { user } = useSelector(selectUser);
  return (
    <div className="bg-cyan-700 h-full w-1/4">
      <div className="p-2 flex items-center bg-cyan-900">
        <img
          src={user.photoURL ? user.photoURL : user.authPhoto}
          alt="userProfil"
          className="w-16 h-16 rounded-full mr-2 "
        />
        <div>
          <p className="text-white font-bold">
            {user.username
              ? user.username + ' ' + user.usersurname
              : user.displayName}
          </p>
          <p>{user.biography}</p>
        </div>
      </div>
      <ChatSearch />
      <Chats />
    </div>
  );
}

export default ChatSidebar;
