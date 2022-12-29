import React from 'react'
import User from '../../assets/pics/userProfil.svg'
import { useNavigate } from 'react-router-dom'

function BlogCard() {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/blogs/blog')} className='group h-1/4 border mx-6 max-lg:mx-4 mb-6 rounded-lg shadow-[0_5px_5px_-1px_rgba(0,0,0,0.3)] hover:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)] focus:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)]'>
        <div className='transition-all duration-500 w-full h-1/4 bg-gray-200 border py-32 overflow-hidden group-hover:py-20'>
            
        </div>

        
        <div className='w-full h-full flex flex-col justify-start p-2 mx-2 flex-wrap'>
            <h1 className='font-bold'>Title</h1>
            <p className='font-medium overflow-hidden transition-all duration-900 h-6 pb-2 group-hover:h-fit group-hover:overflow-visible'>testset tsetst lsakjdfl lsdjf lsdjf lksdjf ;lsakjdf lkdsjf lskdjf lsdkjg dlfkjg tsets jflsjglsak sldjf l;sdkjf sldkfj ld ;lskdjflsdjkf k lsdjkf lskf</p>
            <div className='flex items-center '>
                <img src={User} alt="author" className='w-10' />
                <h1 className='ml-4 text-cyan-600 font-medium'>Ahmad Al-Hariri</h1>
            </div>
        </div>
    </div>
  )
}

export default BlogCard