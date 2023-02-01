import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import SimpleDateTime from 'react-simple-timestamp-to-date';

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
          ? 'flex flex-row-reverse gap-1  items-start p-4 '
          : 'flex gap-1  items-start p-4'
      }
    >
      <div className="">
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
          className=" w-12 h-12 m-auto rounded-full "
          alt="userPhoto"
        />
        <span className="text-gray-600 font-medium text-sm">{} </span>
      </div>
      <div className="flex pt-4 px-2  w-3/4 flex-col  gap-2 ">
        {message.text !== '' && (
          <p
            className={
              message.senderId === user.id
                ? 'bg-[#4699C2] p-4 rounded-l-lg rounded-b-lg max-w-full min-w-1/3 w-fit self-end shadow-lg font-medium'
                : 'bg-gray-300  p-4 rounded-r-lg rounded-b-lg max-w-full min-w-1/3 w-fit self-start  shadow-lg font-medium'
            }
          >
            {message.text}
          </p>
        )}

        {message.photo && (
          <img
            src={message.photo}
            alt="sended image"
            className={
              message.senderId === user.id
                ? ' w-[25rem] h-[20rem] self-end  object-cover '
                : ' w-[25rem] h-[20rem] self-start  object-cover '
            }
          />
        )}
        <span
          className={
            message.senderId === user.id
              ? 'text-xs self-end mb-4'
              : 'text-xs self-start mb-4'
          }
        >
          <SimpleDateTime
            timeSeparator=":"
            format="MYD"
            showTime="1"
            showDate="0"
            meridians="1"
          >
            {message.date}
          </SimpleDateTime>
        </span>
      </div>
    </div>
  );
}

export default Message;
