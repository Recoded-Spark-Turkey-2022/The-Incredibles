import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import Logo from '../../assets/pics/navbar/logo.svg';
import Menu from '../../assets/pics/navbar/menu-button.svg';
import BackAroww from '../../assets/pics/navbar/backArrow.svg';
import UserPhoto from '../../assets/pics/profilepage/profilepic.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../UI/Containerp0';
function Navbar() {
  const [t] = useTranslation();
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
  const [page, setPage] = useState('Home');
  const linksToDisplay = links.map((link) => (
    <NavLink
      end
      style={({ isActive }) =>
        isActive ? { color: '#00ACC1', textDecoration: 'underline' } : {}
      }
      className="px-5 text-gray-500 font-medium hover:text-cyan-500 duration-500 max-md:text-cyan-600 max-md:font-bold max-md:text-xl max-md:hover:underline max-md:decoration-solid max-md:p-2"
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
    <Container>
    <div >
      <nav className=" md:flex justify-between hidden py-5">
        <Link to="/">
          <div className="flex items-center gap-3 px-5 ">
            <img src={Logo} alt="logo" className="w-6" />
            <h1 className=" font-bold text-cyan-600 text-xl">Refubook</h1>
          </div>
        </Link>
        <div className="flex items-center text-xl px-5">
          {linksToDisplay}
          {users ? (
            <Button name={t('nav.signout')} path="/" />
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
          <img className="my-7 ml-4" src={open ? BackAroww : Menu} />
        </button>
        
        {users&&open? (
          <div className="">
            <img
              className="w-36 h-36 m-auto rounded-full "
              src={user.photoURL ? user.photoURL : UserPhoto}
            />
            <p className="text-center font-bold mt-4">
              {user.username ? user.username + user.usersurname : 'user name'}
            </p>
          </div>
        ) :''}
        {open ? (
          <ul className="flex flex-col  mx-10 mt-24">
            {linksToDisplay}{' '}
            {users?(
              <li
                onClick={() => {
                  auth.signOut(), navigate('/'), setPage('Home'),setOpen(!open);
                }}
                className="max-md:text-cyan-600 max-md:font-bold max-md:text-xl max-md:hover:underline max-md:decoration-solid max-md:p-2 "
              >
                {t('nav.signout')}
              </li>
            ):
            <li  onClick={() => {
              auth.signOut(), navigate('/signup'), setPage(''),setOpen(!open);
            }}
            className="max-md:text-cyan-600 max-md:font-bold max-md:text-xl max-md:hover:underline max-md:decoration-solid max-md:p-2 "
          >
            {t('nav.signup')}
          </li>}
          </ul>
        ) : null}
      </nav>
    </div>
    <h1 className="text-center mx-auto pb-10 text-3xl text-cyan-600 font-bold md:hidden">
            {page}
          </h1>
    </Container>
  );
}

export default Navbar;
