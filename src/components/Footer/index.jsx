import React, { useState } from 'react';
import Button from '../Button';
import Logo from '../../assets/pics/navbar/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../LanguageSelect';
import Container from '../Container'

function Footer() {
  const [t] = useTranslation();
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
        'px-5 text-gray-500 font-medium hover:text-blue-500 duration-500'
      }
      key={link.name}
      to={link.link}
    >
      {link.name}
    </NavLink>
  ));
  return (
    <Container>
    <div className="md:flex md:justify-between max-md:flex max-md:flex-col max-md:items-center max-md:justify-center align-middle gap-5">
      <div className=" md:flex md:flex-row max-md:flex max-md:flex-col max-md:items-center max-md:justify-center ">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="max-md:py-10" />
          </Link>
        </div>
        <div className=" text-xl align-middle">{linksToDisplay}</div>
      </div>
      <div className=" md:flex md:flex-row   max-md:flex  max-md:items-center max-md:justify-center gap-5">
        <div className="">
          {user ? (
            <Button name={t('nav.signout')} path="/" />
          ) : (
            <Button name={t('nav.signup')} path="/signup" />
          )}
        </div>

        <LanguageSelect />
      </div>
    </div>
    </Container>
  );
}

export default Footer;
