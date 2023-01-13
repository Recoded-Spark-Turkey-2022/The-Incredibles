import React, { useState } from 'react';
import Button from './Button';
import Logo from '../assets/pics/navbar/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const [t,i18n]=useTranslation();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const links = [
    { name: `${t("nav.home")}`, link: '/' },
    { name:`${t("nav.about")}`, link: '/about' },
    { name: 'Blog', link: '/blogs' },
    { name: 'Contact', link: '/contact' },
  ];
  const linksToDisplay = links.map((link) => (
    <NavLink
      end
      style={({ isActive }) =>
        isActive ? { color: '#00ACC1', textDecoration: 'underline' } : {}
      }
      className={
        'pl-10 text-gray-500 font-medium hover:text-blue-500 duration-500'
      }
      key={link.name}
      to={link.link}
    >
      {link.name}
    </NavLink>
  ));
  return (
    <div className="lg:flex lg:justify-between lg:py-16 lg:mx-24 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
      <div className=" lg:flex lg:flex-row lg:pt-4 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center ">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="max-lg:py-10 max-lg:ml-10" />
          </Link>
        </div>
        <div className="max-lg:pb-10 text-xl">{linksToDisplay}</div>
      </div>
      <div className=" lg:flex lg:flex-row lg:pt-4  max-lg:pb-4 max-lg:flex  max-lg:items-center max-lg:justify-center">
        <div className="pl-10">
          {user ? (
            <button
              onClick={() => {
                auth.signOut(), navigate('/');
              }}
              className="px-10 py-2.5 bg-cyan-600 text-white font-medium text-l leading-tight
             rounded-full shadow-md
             ease-in duration-300 hover:bg-purple-700 hover:shadow-lg hover:scale-110"
            >
              Sign out
            </button>
          ) : (
            <Button name="Sign Up" path="/signup" />
          )}
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
            <li className="p-1 hover:bg-cyan-400 w-full cursor-pointer"
            onClick={()=>{console.log('ar');i18n.changeLanguage('ar')}}
            >
              
              Arabic
            </li>
            <li className="p-1 hover:bg-cyan-400 w-full cursor-pointer"
                        onClick={()=>{console.log('tr');i18n.changeLanguage('tr')}}
                        >
              Turkish
            </li>
            <li className="p-1 hover:bg-cyan-400 w-full cursor-pointer"
                        onClick={()=>{console.log('en');i18n.changeLanguage('en')}}
                        >
              English
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
