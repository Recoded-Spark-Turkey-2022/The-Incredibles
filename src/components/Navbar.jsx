import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Logo from '../assets/pics/navbar/logo.svg';
import Menu from '../assets/pics/navbar/menu-button.svg';
import BackAroww from '../assets/pics/navbar/backArrow.svg';
import UserProfile from '../assets/pics/navbar/userProfil.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const links = user
    ? [
        { name: 'Home', link: '/blogs' },
        { name: 'write', link: '/write' },
        { name: 'My Account', link: '/myaccount' },
      ]
    : [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Blog', link: '/blogs' },
        { name: 'Contact', link: '/contact' },
      ];
  const [open, setOpen] = useState(false);
  const linksToDisplay = links.map((link) => (
    <Link
      className={
        open
          ? 'text-cyan-600 font-bold text-xl p-2 hover:underline decoration-solid'
          : 'lg:p-7 md:p-4 sm:p-2 text-gray-500 font-medium hover:text-blue-500 duration-500 '
      }
      key={link.name}
      to={link.link}
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
          {user ? (
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
            : 'md:hidden'
        }
      >
        <button type="button" onClick={() => setOpen(!open)}>
          <img className="m-7" src={open ? BackAroww : Menu} />
        </button>
        {open ? <img className="w-1/3 m-auto" src={UserProfile} /> : null}
        {open ? (
          <ul className="flex flex-col  mx-10 mt-24">{linksToDisplay}</ul>
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
