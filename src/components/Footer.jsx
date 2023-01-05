import React, { useState } from 'react';
import Button from './Button';
import Logo from '../assets/pics/logo.svg';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';

function Footer() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
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
    <div className="  lg:flex lg:justify-between lg:py-16 lg:mx-24 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
      <div className=" lg:flex lg:flex-row lg:pt-4 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center ">
        <div>
          <img src={Logo} alt="logo" className="max-lg:py-10 max-lg:ml-10" />
        </div>
        <div className="max-lg:pb-10 text-xl">{linksToDisplay}</div>
      </div>
      <div className="flex max-lg:pb-10 max-lg:ml-10 items-start">
        <div>
          <Button name="Sign Up" path="/signup" />
        </div>
        <div className="pl-4">
          <div
            onClick={() => setOpen(!open)}
            className=" flex items-center justify-between font-medium h-10 border border-cyan-600 rounded-full px-4  w-40 cursor-pointer hover:bg-cyan-600 hover:text-white duration-300 ease-in"
          >
            English
            <BiChevronDown size={20} />
          </div>
          <ul
            className={
              open
                ? 'flex flex-col justify-center border items-center mt-2'
                : 'hidden duration-400 ease-in'
            }
          >
            <li className="p-1 hover:bg-cyan-400 w-full cursor-pointer">
              Arabic
            </li>
            <li className="p-1 hover:bg-cyan-400 w-full cursor-pointer">
              Turkish
            </li>
            <li className="p-1 hover:bg-cyan-400 w-full cursor-pointer">
              English
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
