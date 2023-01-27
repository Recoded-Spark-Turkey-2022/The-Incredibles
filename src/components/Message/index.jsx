import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';

function Message({ message }) {
  const ref = useRef();
  const { user } = useSelector(selectUser);
  const { chat } = useSelector((state) => state);
  const { chatUser } = chat;

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  return (
    <div
      ref={ref}
      className={
        message.senderId === user.id
          ? 'flex flex-row-reverse gap-8'
          : 'flex gap-8'
      }
    >
      <div className="m-4">
        <img
          src={
            message.senderId === user.id
              ? user.photoURL
                ? user.photoURL
                : user.authPhoto
              : chatUser.photoURL
              ? chatUser.photoURL
              : chatUser.authPhoto
          }
          className="w-12 h-12 rounded-full "
          alt="userPhoto"
        />
        <span className="text-gray-600 font-medium text-sm">{} </span>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {message.text !== '' && (
          <p
            className={
              message.senderId === user.id
                ? 'bg-blue-500 p-4 rounded-l-lg rounded-b-lg max-w-fit'
                : 'bg-gray-300 p-4 rounded-r-lg rounded-b-lg max-w-fit '
            }
          >
            {message.text}{' '}
          </p>
        )}
        {message.photo && (
          <img
            src={message.photo}
            alt="sended image"
            className=" w-[25rem] h-[20rem] mb-4  object-cover "
          />
        )}
      </div>
    </div>
  );
}

export default Message;
