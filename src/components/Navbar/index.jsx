import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/pics/navbar/logo.svg';
import MenuB from '../../assets/pics/navbar/menu-button.svg';
import BackAroww from '../../assets/pics/navbar/backArrow.svg';
import UserPhoto from '../../assets/pics/profilepage/profilepic.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Navbar() {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const { user } = useSelector(selectUser);
  const [users] = useAuthState(auth);
  const links = users
    ? [
        { name: `${t('nav.blogs')}`, link: '/blogs' },
        { name: `${t('nav.write')}`, link: '/myaccount/write' },
        { name: `${t('nav.myaccount')}`, link: '/myaccount' },
        { name: `${t('nav.messages')}`, link: '/chat' },
      ]
    : [
        { name: `${t('nav.home')}`, link: '/' },
        { name: `${t('nav.about')}`, link: '/about' },
        { name: `${t('nav.blogs')}`, link: '/blogs' },
        { name: `${t('nav.contact')}`, link: '/contact' },
      ];
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState('');
  const linksToDisplay = links.map((link) => (
    <NavLink
      end
      style={({ isActive }) =>
        isActive ? { color: '#00ACC1', textDecoration: 'underline' } : {}
      }
      className="lg:p-7 md:p-4 sm:p-2 text-gray-500 font-medium hover:text-cyan-500 duration-500 max-md:text-cyan-600 max-md:font-bold max-md:text-xl max-md:hover:underline max-md:decoration-solid max-md:p-2"
      key={link.name}
      to={link.link}
      onClick={() => {
        setOpen(false), setPage(link.name);
      }}
    >
      {link.name}
    </NavLink>
  ));
  return (
    <div className='sticky top-0 bg-gradient-to-b from-blue-50 z-40'>
      <nav className="lg:mb-10 lg:mx-16  md:mb-5 md:mx-10  md:flex justify-between hidden">
        <Link to="/">
          <div className="flex items-center lg:mt-7 mt-3">
            <img src={Logo} alt="logo" className="w-6" />
            <h1 className="ml-1 font-bold text-cyan-600 text-xl">Refubook</h1>
          </div>
        </Link>
        <div className="flex items-center text-xl">
          {linksToDisplay}
          {users ? (
            <div className='flex justify-center'>
              <button className='max-lg:bg-cyan-600 max-lg:text-white lg:bg-white lg:text-cyan-600 lg:border-cyan-600 lg:border-2 font-medium text-l leading-tight
                rounded-full shadow-md
                ease-in duration-300 hover:bg-purple-700 hover:shadow-lg hover:scale-110'>
            <img
          className="m-auto h-12 w-12 rounded-full"
          src={
            user.photoURL
              ? user.photoURL
              : user.authPhoto
              ? user.authPhoto
              : UserPhoto
          }
          alt="avatar-preview"
        />
        </button>
            <button
            onClick={() => {
              auth.signOut(), navigate('/');
            }}
            className="px-10 py-2.5 max-lg:bg-cyan-600 max-lg:text-white lg:bg-white lg:text-cyan-600 lg:border-cyan-600 lg:border-2 font-medium text-l leading-tight
                shadow-md
                ease-in duration-300 hover:bg-purple-700 hover:shadow-lg hover:scale-110"
          >
            {t('nav.signout')}
          </button>
          </div>

          ) : (
            <div>
              <Button name={t('nav.signup')} path="/signup" />
            </div>
          )}
        </div>
      </nav>
      <nav
        name="sid-bar"
        className={
          open
            ? 'md:hidden rounded-r-3xl border-gray-100 w-9/12 z-50 border-2 h-screen absolute bg-white'
            : 'md:hidden flex'
        }
      >
        <button type="button" onClick={() => setOpen(!open)}>
          <img className="my-7 ml-4" src={open ? BackAroww : MenuB} />
        </button>
        {open ? (
          <div className="">
            <img
              className="w-36 h-36 m-auto rounded-full "
              src={
                user.photoURL
                  ? user.photoURL
                  : user.authPhoto
                  ? user.authPhoto
                  : UserPhoto
              }
            />
            <p className="text-center font-bold mt-4">
            { user.username + ' ' + user.usersurname || user.displayName || "User Name" }
            </p>
          </div>
        ) : (
          <h1 className="self-center mx-auto pr-4 text-3xl text-cyan-600 font-bold">
            {page}
          </h1>
        )}
        {open ? (
          <ul className="flex flex-col  mx-10 mt-8">
            {linksToDisplay}{' '}
            {users && (
              <li
                onClick={() => {
                  auth.signOut(), navigate('/'), setPage('Home');
                }}
                className="max-md:text-cyan-600 max-md:font-bold max-md:text-xl max-md:hover:underline max-md:decoration-solid max-md:p-2 "
              >
                {t('nav.signout')}
              </li>
            )}
          </ul>
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
