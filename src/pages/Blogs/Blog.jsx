import React from 'react'
import BlogImage from '../../assets/pics/blogpage/blogImage.svg'
import ShareIcon from '../../assets/pics/blogpage/share.svg'
import FaceIcon from '../../assets/pics/blogpage/faceb.svg'
import InstaIcon from '../../assets/pics/blogpage/insta.svg'
import TweterIcon from '../../assets/pics/blogpage/tweter.svg'

function Blog() {
  return (
    <div>
      <div className='flex flex-col  '>
      <h1 className='font-bold text-5xl pb-8'>Title Title tkolsi lsjisdjf </h1>
      <div className=' relative border'>
        <img src={BlogImage} alt="blog-image" className='' />
        <img src={ShareIcon} alt="share-image" className='w-8 pb-4 text-cyan-600' />
        <img src={FaceIcon} alt="face-image" className='w-8 pb-4 text-cyan-600' />
        <img src={InstaIcon} alt="insta-image" className='w-8 pb-4 text-cyan-600' />
        <img src={TweterIcon} alt="tweter-image" className='w-8 pb-4 text-cyan-600' />
      </div>

      </div>
    </div>
  )
}

export default Blog