import React,{useState} from 'react';
import Chats from '../Chats';
import ChatSearch from '../ChatSearch';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import ChatsIcon from '../../assets/pics/chatpage/chats.svg'
import Back from '../../assets/pics/navbar/backArrow.svg'

function ChatSidebar() {
  const { user } = useSelector(selectUser);
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={`bg-cyan-700 h-full w-1/4 max-sm:w-full max-sm:${open?'':'hidden'}`}>
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
        <ChatSearch setOpen={setOpen}/>
        <Chats setOpen={setOpen}/>
      </div>
      <img onClick={()=>setOpen(!open)} src={open?Back:ChatsIcon} alt="chatIcon" className={open?'w-4 h-4 absolute':'w-6 h-6 absolute top-10 z-10 '} />
    </>
  );
}

export default ChatSidebar;
