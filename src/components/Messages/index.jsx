import React, { useState, useEffect } from 'react';
import Message from '../Message';
import { useSelector } from 'react-redux';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function Messages() {
  const [messages, setMessages] = useState([]);
  const { chat } = useSelector((state) => state);
  const { chatId } = chat;

  useEffect(() => {
    const fetchChat = () => {
      const unsup = onSnapshot(doc(db, 'chats', chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });

      return () => {
        unsup();
      };
    };
    chatId && fetchChat();
  }, [chatId]);

  return (
    <div
      className=" bg-pink-100/20 w-full bottom-[5rem] absolute overflow-y-scroll"
      style={{
        // backgroundImage:
        //   'url(' +
        //   'https://i.pinimg.com/236x/a8/e5/66/a8e5664d7887e8797f168fc2ed394319.jpg' +
        //   ')',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        height: 'calc(100% - 160px )',
      }}
    >
      {messages?.map((m, i) => (
        <Message key={i} message={m} />
      ))}
    </div>
  );
}

export default Messages;
