import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/pics/logo.svg';
import Menu from '../assets/pics/menu-button.svg';
import BackAroww from '../assets/pics/backArrow.svg';
import UserProfile from '../assets/pics/userProfil.svg';

//created because the structure of this navbar contains different options than NavBar Component
//will be sticking to pages MyAccount, WriteBlog, UserDetails
//will be connected to the main structure via Home button
//when user sign out will be redirected to Home
function UserNavbar() {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'WriteBlog', link: '/write' },
    { name: 'MyAccount', link: '/myaccount' },
    { name: 'SignOut', link: '/' },
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
      <nav className="lg:my-10 lg:mx-24  md:my-5 md:mx-10  md:flex justify-between hidden">
        <div className="flex">
          <img src={Logo} alt="logo" />
          <h1 className="ml-3 font-bold text-cyan-600 text-xl">Refubook</h1>
        </div>
        <div>{linksToDisplay}</div>
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

export default UserNavbar;