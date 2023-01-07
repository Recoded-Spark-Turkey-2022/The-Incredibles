import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

function WriteBlog() {
  //function to store images in firebase storage
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (media != null) {
      const imageRef = ref(storage, `BlogImages/${media.name + v4()}`);
      uploadBytes(imageRef, media).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
          const docRef = await addDoc(collection(db, 'blogs'), {
            title: title,
            subTitle: subTitle,
            content: content,
            mediaURL: url,
            likes: 0,
            user_name: null,
          });
          alert('Blog submitted successfully');
        });
      });
    }
  };
  //
  const [title, setTitle] = useState('');
  const [subTitle, setsubTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlesubTitleChange = (event) => {
    setsubTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
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
