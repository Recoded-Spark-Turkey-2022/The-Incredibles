import React from 'react';
import Message from '../Message';

function Messages() {
  return (
    <div
      className="h-[25.5rem] overflow-y-scroll"
      style={{
        backgroundImage:
          'url(' +
          'https://i.pinimg.com/236x/a8/e5/66/a8e5664d7887e8797f168fc2ed394319.jpg' +
          ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Message />
    </div>
  );
}

export default Messages;
