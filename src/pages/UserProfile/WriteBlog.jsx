import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import { useDispatch } from 'react-redux';
import { getBlogs } from '../../features/blogs/blogsSlice';
import { CATEGORIES } from '../../data';

function WriteBlog() {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const uploadImg = async () => {
      let url;
      if (media) {
        const imageRef = ref(storage, `BlogImages/${media.name + v4()}`);
        const snapshot = await uploadBytes(imageRef, media);
        url = await getDownloadURL(snapshot.ref);
      } else {
        url = null;
      }
      return url;
    };
    const submit = async () => {
      const url = await uploadImg();
      await addDoc(collection(db, 'blogs'), {
        title: title,
        subTitle: subTitle,
        content: content,
        mediaURL: url,
        likedUsers: [],
        unlikedUsers: [],
        date: new Date().toISOString(),
        categorey,
        author: {
          authorId: user.id,
          authorName: user.username + user.usersurname,
          authorPhoto: user.photoURL,
        },
      });
      alert('Blog submitted successfully');
      setTitle('');
      setContent('');
      setMedia(null);
      setsubTitle('');
      dispatch(getBlogs());
    };
    submit();
  };
  const [title, setTitle] = useState('');
  const [subTitle, setsubTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);
  const [categorey, setCategorey] = useState('social');

  const categoreyToDisplay = CATEGORIES.map((cat, i) => (
    <option key={i}> {cat} </option>
  ));

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlesubTitleChange = (event) => {
    setsubTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleCategoreyChange = (event) => {
    setCategorey(event.target.value);
  };

  const handleMediaChange = (event) => {
    setMedia(event.target.files[0]);
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
            value={title}
            onChange={handleTitleChange}
          />
          <label className="font-bold text-gray-700 text-m">
            Category
            <select
              onChange={handleCategoreyChange}
              value={categorey}
              className="w-fit  m-1 text-sm bg-cyan-100"
            >
              {categoreyToDisplay}
            </select>
          </label>
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
            value={subTitle}
            onChange={handlesubTitleChange}
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
            value={content}
            onChange={handleContentChange}
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
