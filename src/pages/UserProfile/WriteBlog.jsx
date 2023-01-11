import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postBlogs, selectBlog } from "../../features/blogs/blogsSlice";
import { Navigate, useNavigate } from 'react-router-dom';
import { selectUser } from '../../features/users/usersSlice';
 
function WriteBlog() {
  const dispatch = useDispatch();
  const { blogs } = useSelector(selectBlog);
  const { user } = useSelector(selectUser);
  console.log(blogs)

  const [blogFormData, setBlogFormData] = useState({
    title: blogs.title ? blogs.title : "",
    subtitle: blogs.subtitle ? blogs.subtitle : "",
    content: blogs.content ? blogs.content : "",
    blogID: blogs.blogID,
    userID: user.id
  })
  
  const [media, setMedia] = useState(null);

  function handleChange(e) {
    const key = e.target.blogID;
    const value = e.target.value;

    setBlogFormData({
      ...blogFormData,
      [key]: value,
    })
  }

  const handleMediaChange = (event) => {
    if (event.target.files[0]) {
    setMedia(event.target.files[0])
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(postBlogs({ postBlogs, media }));
  };

  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-9/12 m-auto max-sm:text-center"
        onSubmit={handleSubmit}
      >
        <h1 className="block text-gray-700 text-3xl font-bold mb-10 text-center">
          Write new blog
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="title"
            value={postBlogs.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subTitle"
          >
            Sub Title:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="subTitle"
            value={postBlogs.subtitle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content:
          </label>
          <textarea
            rows={8}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="content"
            value={postBlogs.content}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="media"
          >
            Media (image or video):
          </label>

          <input
            className=" shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            name="media"
            onChange={handleMediaChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="max-sm:m-auto h-10 px-10 py-2.5 text-center bg-cyan-600 text-white font-medium text-l leading-tight 
          rounded-full shadow-md
          ease-in duration-300 hover:bg-purple-700 hover:shadow-lg  hover:scale-110"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WriteBlog;
