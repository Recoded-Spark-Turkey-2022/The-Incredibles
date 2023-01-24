import React from 'react'

function Message() {
  return (
    <div className='flex gap-8'>
      <div className='m-4'>
        <img src="https://pixlr.com/images/index/remove-bg.webp" className='w-12 h-12 rounded-full ' alt="userPhoto" />
        <span className='text-gray-600 font-medium text-sm'>Just now </span>
      </div>
      <div className='flex flex-col gap-2 mt-4'>
        <p className='bg-white p-4 rounded-r-lg rounded-b-lg max-w-fit '>Hello there how are you </p>
        <img src="https://pixlr.com/images/index/remove-bg.webp" alt="sended image" className=' w-36 h-36 mb-4  object-cover ' />
      </div>
    </div>
  )
}

export default Message