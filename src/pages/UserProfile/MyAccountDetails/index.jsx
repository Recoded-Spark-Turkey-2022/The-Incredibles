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
import { useTranslation } from 'react-i18next';
import Container from '../../../components/UI/Container';

function MyAccountDetails() {
  const { user } = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [t] = useTranslation();

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
    <section name="myaccountdetails" className="bg-[#70CDD6]">
      <Container>
        <div className="bg-white rounded-3xl shadow-md md:w-9/12 m-auto my-10 max-md:px-10">
          <form onSubmit={handleSubmit} className="">
            <Popover placement="bottom">
              <PopoverHandler className="relative max-md:pt-10">
                <div className="flex flex-col items-center md:pb-5">
                  <img
                    className="m-auto relative top-36 left-16 hover:cursor-pointer"
                    src={ChangePhoto}
                  />
                  <img
                    className="m-auto h-40 w-40 rounded-full hover:cursor-pointer"
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
                  {t('myaccount.myaccountdetails.uploadphoto')}
                </label>
                <input
                  type="file"
                  id="photo"
                  className="shadow appearance-none border rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleImgChange}
                />
              </PopoverContent>
            </Popover>
            <h2 className="p-5 font-bold text-md text-center text-cyan-600">
              {' '}
              {user.username
                ? user.username + ' ' + user.usersurname
                : user.displayName}
            </h2>
            <div name="formholder" className="w-3/4 max-md:w-full m-auto">
              <div
                name="usernameholder"
                className="flex md:flex-row max-md:flex-col justify-between "
              >
                <div name="username" className="flex flex-col">
                  <label
                    className="block text-sky-500 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    {t('myaccount.myaccountdetails.name')}
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
                    {t('myaccount.myaccountdetails.surname')}
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
              <div name="infoholder" className="">
                <div name="userbio" className="flex flex-col">
                  <label
                    className="block text-sky-500 text-sm font-bold mb-2"
                    htmlFor="biography"
                  >
                    {t('myaccount.myaccountdetails.biography')}
                  </label>
                  <textarea
                    rows={1}
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="biography"
                    value={formData.biography}
                    onChange={handleChange}
                  />
                </div>
                <div name="userlocation" className="flex flex-col">
                  <label
                    className="block text-sky-500 text-sm font-bold mb-2"
                    htmlFor="location"
                  >
                    {t('myaccount.myaccountdetails.location')}
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div
              name="formbuttons"
              className="flex flex-row max-md:flex-col gap-5 m-auto justify-center py-8 "
            >
              <button
                type="submit"
                className="px-10 py-2.5 bg-cyan-600 text-white font-medium text-l leading-tight
                rounded-full shadow-md
                ease-in duration-300 hover:bg-purple-700 hover:shadow-md hover:scale-110  m-auto"
              >
                {t('myaccount.myaccountdetails.save')}
              </button>
              <button
                onClick={() => {
                  navigate('/myaccount');
                }}
                className="px-8 py-2.5 max-md:bg-cyan-600 max-md:text-white md:bg-white md:text-cyan-600 md:border-cyan-600 md:border font-medium text-l leading-tight
                rounded-full shadow-md
                ease-in duration-300 hover:bg-purple-700 hover:shadow-md hover:scale-110 w m-auto"
              >
                {t('myaccount.myaccountdetails.cancle')}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default MyAccountDetails;
