import React from 'react';
import Logo from '../assets/pics/logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contacts', link: '/contact' },
  ];
  const linksToDisplay = links.map((link) => (
    <Link
      className={
        'pl-10 text-gray-500 font-medium hover:text-blue-500 duration-500'
      }
      key={link.name}
      to={link.link}
    >
      {link.name}
    </Link>
  ));
  return (
    <div className='flex justify-between lg:py-16 lg:mx-24 '>
      <div className=" flex lg:flex-row pt-4 ">
        <div>
          <img src={Logo} alt="logo" className="" />
        </div>
        <div>{linksToDisplay}</div>
      </div>
      <div>
      <button
            type="button"
            className=" px-10 py-2.5 bg-cyan-600 text-white font-medium text-l leading-tight 
             rounded-full shadow-md
             ease-in duration-300 hover:bg-purple-700 hover:shadow-lg  hover:scale-110"
          >
            Sign Up
          </button>
      </div>
    </div>
  );
}

export default Footer;
