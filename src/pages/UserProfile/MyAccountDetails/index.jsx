import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData, selectUser } from '../../../features/users/usersSlice';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from '@material-tailwind/react';
import User from '../../../assets/pics/profilepage/profilepic.svg';
import ChangePhoto from '../../../assets/pics/profilepage/changepic.svg';

function MyAccountDetails() {
  const { user } = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: user.username ? user.username : '',
    usersurname: user.usersurname ? user.usersurname : '',
    biography: user.biography ? user.biography : '',
    location: user.location ? user.location : '',
    id: user && user.id,
  });
  const [profilImg, setProfileImg] = useState(null);

  function handleImgChange(e) {
    if (e.target.files[0]) {
      setProfileImg(e.target.files[0]);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(userData({ formData, profilImg }));
    navigate('/myaccount');
  };

  function handleChange(event) {
    const key = event.target.id;
    const value = event.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
  }
  return (
    <section name="myaccountdetails" className="bg-sky-300 lg:p-20 max-lg:p-5">
      <div className="bg-white rounded-3xl">
        <div className="lg:px-28 lg:py-16 max-lg:p-3">
          <form onSubmit={handleSubmit} className="lg:mx-40 lg:px-28">
            <Popover placement="top">
              <PopoverHandler className="relative">
                <div className="flex flex-col items-center lg:pb-20 max-lg:p-10">
                  <img
                    className="m-auto relative top-36 left-16"
                    src={ChangePhoto}
                  />
                  <img
                    className="m-auto h-40 w-40 rounded-full"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : user.authPhoto
                        ? user.authPhoto
                        : User
                    }
                    alt="avatar-preview"
                  />
                </div>
              </PopoverHandler>
              <PopoverContent className="absolute">
                <label
                  className="block text-sky-500 text-sm font-bold mb-2"
                  htmlFor="userphoto"
                >
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  className="shadow appearance-none border rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleImgChange}
                />
              </PopoverContent>
            </Popover>
            <h2 className="p-5 font-bold text-lg text-center text-cyan-600">
              {' '}
              {user.username
                ? user.username + ' ' + user.usersurname
                : user.displayName}
            </h2>
            <div
              name="usernameholder"
              className="flex lg:flex-row max-lg:flex-col justify-between w-full"
            >
              <div name="username" className="flex flex-col">
                <label
                  className="block text-sky-500 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="username"
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div name="usersurname" className="flex flex-col">
                <label
                  className="block text-sky-500 text-sm font-bold mb-2"
                  htmlFor="usersurname"
                >
                  Surname:
                </label>
                <input
                  type="text"
                  id="usersurname"
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.usersurname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label
              className="block text-sky-500 text-sm font-bold mb-2"
              htmlFor="biography"
            >
              Biography:
            </label>
            <textarea
              rows={1}
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="biography"
              value={formData.biography}
              onChange={handleChange}
            />

            <label
              className="block text-sky-500 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location:
            </label>
            <input
              type="text"
              id="location"
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.location}
              onChange={handleChange}
            />

            <div
              name="formbuttons"
              className="flex flex-row justify-center p-2"
            >
              <button
                type="submit"
                className="px-10 py-2.5 mr-5 bg-cyan-600 text-white font-medium text-l leading-tight
                rounded-full shadow-md
                ease-in duration-300 hover:bg-purple-700 hover:shadow-lg hover:scale-110"
              >
                Save
              </button>
              <button
                onClick={() => {
                  navigate('/myaccount');
                }}
                className="px-10 py-2.5 ml-5 max-lg:bg-cyan-600 max-lg:text-white lg:bg-white lg:text-cyan-600 lg:border-cyan-600 lg:border-2 font-medium text-l leading-tight
                rounded-full shadow-md
                ease-in duration-300 hover:bg-purple-700 hover:shadow-lg hover:scale-110"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MyAccountDetails;
