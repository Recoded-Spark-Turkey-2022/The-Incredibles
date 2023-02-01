import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import Logo from '../../assets/pics/navbar/logo.svg';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../LanguageSelect';
import Container from '../UI/Containerp0';

function Footer() {
  const loc = useLocation();
  const [page, setPage] = useState('');
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
  useEffect(() => {
    loc.pathname == '/chat' ? setPage('Messages') : setPage('');
  }, [loc]);
  return (
    <Container>
          <div className='border-t-2 '>

      <div
        className={`mx-auto  py-2 px-5 md:flex md:justify-between max-md:${
          page == 'Messages' ? 'hidden' : 'flex'
        } max-md:flex-col max-md:items-center max-md:justify-center items-center	 gap-4`}
      >
        <div className=" md:flex md:flex-row max-md:flex max-md:flex-col max-md:items-center max-md:justify-center ">
          <div>
            <Link to="/">
              <img src={Logo} alt="logo" className="max-md:py-2" />
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
      </div>
    </Container>
  
  );
}

export default Footer;
