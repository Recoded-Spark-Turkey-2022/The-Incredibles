import React from 'react'
import ChangePhoto from '../../assets/pics/profilepage/changepic.svg'

function SendInput() {
  return (
    <div className='bg-gray-300 absolute w-full flex justify-between gap-8 bottom-0 h-20  p-4'>
        <input type="text" placeholder='Type your message....' className='w-full outline-none rounded-lg placeholder:p-4' />
        <div className='flex gap-4'>
            <input type="file" style={{display:'none'}} id='file' />
            <label htmlFor="file">
                <img className='w-12 h-12' src={ChangePhoto} alt="share" />
            </label>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>send</button>
        </div>
    </div>
  )
}

export default SendInput