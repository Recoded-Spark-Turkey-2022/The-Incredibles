import React from 'react';
import User from '../../assets/pics/navbar/userProfil.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import {parseISO, formatDistanceToNow} from 'date-fns';

function BlogCard({ blog }) {
  let timeAgo =''
  if(blog.data.date){
    const date = parseISO(blog.data.date)
    const time = formatDistanceToNow(date)
    timeAgo = `created ${time} ago`
  } 
  const handleClick= async ()=>{
    
   await navigate('/blogs/blog', {state:{blog: blog}})
  }
  const navigate = useNavigate();
  const { user } = useSelector(selectUser);
  return (
    <div
      onClick={handleClick}
      className="group h-1/4 border mx-6 max-lg:mx-4 mb-6 rounded-lg shadow-[0_5px_5px_-1px_rgba(0,0,0,0.3)] hover:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)] focus:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)]"
    >
      <div className="transition-all duration-500 w-full bg-gray-200 border overflow-hidden group-hover:py-1">
        <img
          className="m-auto h-60 w-60"
          src={blog.data.mediaURL ? blog.data.mediaURL : null}
          alt="blog-photo-preview"
        />
      </div>

      <div className="w-full h-full flex flex-col justify-start p-2 mx-2 flex-wrap">
        <h1 className="font-bold">{blog.data.title}</h1>
        <p className="font-medium overflow-hidden transition-all duration-900 h-6 pb-2 group-hover:h-fit group-hover:overflow-visible">
          {blog.data.subTitle}
        </p>
        <span>{timeAgo}</span>
        <span>{blog.data.likes} likes</span>
        <div className="flex items-center ">
          <img
            src={user.photoURL ? user.photoURL : User}
            alt="author"
            className="w-10 rounded-full"
          />
          <h1 className="ml-4 text-cyan-600 font-medium">
            {user.username ? user.username : 'Name'}{' '}
            {user.usersurname ? user.usersurname : 'Surname'}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
