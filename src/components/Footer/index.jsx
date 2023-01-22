import React, { useState } from 'react';
import Button from '../Button';
import Logo from '../../assets/pics/navbar/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../Footer';

function Footer() {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const links = [
    { name: `${t('nav.home')}`, link: '/' },
    { name: `${t('nav.about')}`, link: '/about' },
    { name: `${t('nav.blogs')}`, link: '/blogs' },
    { name: `${t('nav.contact')}`, link: '/contact' },
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
              {t('nav.signout')}
            </button>
          ) : (
            <Button name={t('nav.signup')} path="/signup" />
          )}
        </div>

        <LanguageSelect />
      </div>
    </div>
  );
}

export default Footer;
