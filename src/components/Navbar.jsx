import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Logo from '../assets/pics/navbar/logo.svg';
import Menu from '../assets/pics/navbar/menu-button.svg';
import BackAroww from '../assets/pics/navbar/backArrow.svg';
import UserPhoto from '../assets/pics/profilepage/profilepic.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/users/usersSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const { user } = useSelector(selectUser);
  const [users] = useAuthState(auth);
  const links = users
    ? [
        { name: 'Home', link: '/blogs' },
        { name: 'Write', link: '/myaccount/write' },
        { name: 'My Account', link: '/myaccount' },
      ]
    : [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Blog', link: '/blogs' },
        { name: 'Contact', link: '/contact' },
      ];
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState('');
  const linksToDisplay = links.map((link) => (
    <Link
      className="lg:p-7 md:p-4 sm:p-2 text-gray-500 font-medium hover:text-blue-500 duration-500 max-md:text-cyan-600 max-md:font-bold max-md:text-xl max-md:hover:underline max-md:decoration-solid max-md:p-2"
      key={link.name}
      to={link.link}
      onClick={() => {
        setOpen(false), setPage(link.name);
      }}
    >
      {link.name}
    </Link>
  ));
  return (
    <div>
      <nav className="lg:mb-10 lg:mx-16  md:mb-5 md:mx-10  md:flex justify-between hidden">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-6" />
          <h1 className="ml-1 font-bold text-cyan-600 text-xl">Refubook</h1>
        </div>
        <div className="flex items-center ">
          {linksToDisplay}
          {users ? (
            <button
              onClick={() => {
                auth.signOut(), navigate('/');
              }}
              className="lg:p-7 md:p-4 sm:p-2 text-gray-500 font-medium hover:text-blue-500 duration-500"
            >
              Sign out
            </button>
          ) : (
            <div>
              <Button name="Sign Up" path="/signup" />
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
          <img className="my-7 ml-4" src={open ? BackAroww : Menu} />
        </button>
        {open ? (
          <div className="">
            <img
              className="w-36 h-36 m-auto rounded-full "
              src={user.photoURL ? user.photoURL : UserPhoto}
            />
            <p className="text-center font-bold mt-4">
              {user.username ? user.username + user.usersurname : 'user name'}
            </p>
          </div>
        ) : (
          <h1 className="self-center mx-auto pr-4 text-3xl text-cyan-600 font-bold">
            {page}
          </h1>
        )}
        {open ? (
          <ul className="flex flex-col  mx-10 mt-24">
            {linksToDisplay}{' '}
            {users && (
              <li
                onClick={() => {
                  auth.signOut(), navigate('/'), setPage('Home');
                }}
                className="max-md:text-cyan-600 max-md:font-bold max-md:text-xl max-md:hover:underline max-md:decoration-solid max-md:p-2 "
              >
                Sign out
              </li>
            )}
          </ul>
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
