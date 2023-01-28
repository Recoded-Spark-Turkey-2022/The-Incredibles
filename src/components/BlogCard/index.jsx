import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import { parseISO, formatDistanceToNow } from 'date-fns';
import { deleteBlog } from '../../features/blogs/blogsSlice';
import NoMedia from '../../assets/pics/blogpage/nomedia.svg';

function BlogCard({ blog }) {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  const { user } = useSelector(selectUser);
  const thisBlog = blogs && blogs.find((el) => el.id === blog.id);
  let timeAgo = '';
  if (blog.data.date) {
    const date = parseISO(blog.data.date);
    const time = formatDistanceToNow(date);
    timeAgo = `created ${time} ago`;
  }
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate('/blogs/blog', { state: { blog: blog } });
  };
  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
  };

  return (
    <div className="group h-[400px] border mx-6 max-lg:mx-4 mb-6 overflow-hidden rounded-lg shadow-[0_5px_5px_-1px_rgba(0,0,0,0.3)] hover:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)] focus:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)]">
      <div className="transition-all duration-500 w-full h-52 bg-gray-200 border overflow-hidden ">
        {thisBlog && user.id === thisBlog.data.author.authorId ? (
          <div
            className=" w-4 text-center absolute bg-red-200 font-bold hover:bg-red-600"
            onClick={handleDelete}
          >
            X
          </div>
        ) : null}
        <img
          onClick={handleClick}
          className="m-auto w-full h-full"
          src={blog.data.mediaURL ? blog.data.mediaURL : NoMedia}
          alt="blog-photo-preview"
        />
      </div>

      <div className="w-full h-full flex flex-col justify-start p-2 mx-2 flex-wrap">
        <div onClick={handleClick}>
          <h1 className="font-bold">{blog.data.title}</h1>
          <p className="font-medium overflow-hidden transition-all duration-900 h-6 pb-2 group-hover:h-fit group-hover:overflow-visible">
            {blog.data.subTitle}
          </p>
          <span>{timeAgo}</span>
          <p>{thisBlog && thisBlog.data.likedUsers.length} likes</p>
        </div>
        <div className="flex items-center ">
          <img
            src={thisBlog && thisBlog.data.author.authorPhoto}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="ml-4 text-cyan-600 font-medium">
            {thisBlog && thisBlog.data.author.authorName}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
