import React, { useState, useEffect, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import { selectUser } from '../../features/users/usersSlice';
import Button from '../UI/Button';
import Container from '../UI/Containerp0';
import Logo from '../../assets/pics/navbar/logo.svg';
import MenuB from '../../assets/pics/navbar/menu-button.svg';
import BackAroww from '../../assets/pics/navbar/backArrow.svg';
import UserPhoto from '../../assets/pics/profilepage/profilepic.svg';

function Navbar() {
  const loc = useLocation();
  const [page, setPage] = useState('');
  useEffect(() => {
    switch (loc.pathname) {
      case '/signin':
        setPage('Sign in');
        break;
      case '/signup':
        setPage('Sign up');
        break;
      case '/myaccount':
        setPage('My account');
        break;
      case '/myaccount/myaccountdetails':
        setPage('My account details');
        break;
      case '/myaccount/write':
        setPage('Write');
        break;
      case '/about':
        setPage('About');
        break;
      case '/blogs':
        setPage('Blogs');
        break;
      case '/blogs/blog':
        setPage('Blogs');
        break;
      case '/chat':
        setPage('Messages');
        break;
      case '/contact':
        setPage('Contact');
        break;
      case '/':
        setPage('Home');
        break;
      default:
        setPage(null);
    }
    open ? setOpen(!open) : null;
  }, [loc]);

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
  const linksToDisplay = links.map((link) => (
    <NavLink
      end
      style={({ isActive }) =>
        isActive ? { color: '#00ACC1', textDecoration: 'underline' } : {}
      }
      className="lg:p-7 md:p-4 sm:p-2 text-gray-500 font-medium hover:text-cyan-500 duration-500 max-md:text-cyan-600 max-md:font-bold max-md:text-xl max-md:hover:underline max-md:decoration-solid max-md:p-2"
      key={link.name}
      to={link.link}
    >
      {link.name}
    </NavLink>
  ));

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div
      className={`${
        !page ? 'hidden' : 'sticky'
      } max-md:h-10 top-0 bg-gradient-to-t from-white to-cyan-50 shadow-lg z-40 `}
    >
      <Container>
        <nav className=" md:mx-5 md:flex justify-between hidden">
          <Link to="/">
            <div className="flex items-center lg:mt-7 mt-3">
              <img src={Logo} alt="logo" className="w-6" />
              <h1 className="ml-1 font-bold text-cyan-600 text-xl">Refubook</h1>
            </div>
          </Link>
          <div className="flex items-center text-xl">
            {linksToDisplay}
            {users ? (
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button
                      className="border-cyan-600 border-2 rounded-full shadow-md
                ease-in duration-300 hover:shadow-lg hover:scale-110"
                    >
                      <img
                        className="m-auto h-12 w-12 rounded-full"
                        src={
                          user.photoURL
                            ? user.photoURL
                            : user.authPhoto
                            ? user.authPhoto
                            : UserPhoto
                        }
                        alt="avatar-preview"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border-cyan-600 border-2 bg-gradient-to-r from-white via-cyan-50 to-cyan-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => {
                                navigate('/myaccount/myaccountdetails');
                              }}
                              className={classNames(
                                active
                                  ? 'bg-gray-300 shadow-lg text-cyan-500'
                                  : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                            >
                              Account settings
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => {
                                auth.signOut(),
                                  navigate('/'),
                                  localStorage.removeItem('loggedIn');
                              }}
                              className={classNames(
                                active
                                  ? 'bg-gray-300 shadow-lg text-cyan-500'
                                  : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                            >
                              {t('nav.signout')}
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <div>
                <Button name={t('nav.signin')} path="/signin" />
              </div>
            )}
          </div>
        </nav>
        <nav
          name="sid-bar"
          className={
            open
              ? 'md:hidden rounded-r-3xl border-gray-100 w-9/12 z-50 border-2 duration-300 ease-in fixed left-0 h-screen bg-gradient-to-r from-white via-gray-50 to-gray-100'
              : 'md:hidden left-[-100%] duration-500 ease-in flex'
          }
        >
          <button type="button" onClick={() => setOpen(!open)}>
            <img className="my-2 ml-4" src={open ? BackAroww : MenuB} />
          </button>
          {open ? (
            <div>
              {users ? (
                <div>
                  <div className="flex justify-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button
                          className="border-cyan-600 border-2 rounded-full shadow-md
                          ease-in duration-300 hover:shadow-lg hover:scale-110"
                        >
                          <img
                            className="m-auto h-36 w-36 rounded-full"
                            src={user.photoURL || user.authPhoto || UserPhoto}
                            alt="avatar-preview"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border-cyan-600 border-2 bg-gradient-to-r from-white via-cyan-50 to-cyan-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    navigate('/myaccount/myaccountdetails');
                                  }}
                                  className={classNames(
                                    active
                                      ? 'bg-gray-300 shadow-lg text-cyan-500'
                                      : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                  )}
                                >
                                  Account settings
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    auth.signOut(),
                                      navigate('/'),
                                      localStorage.removeItem('loggedIn');
                                  }}
                                  className={classNames(
                                    active
                                      ? 'bg-gray-300 shadow-lg text-cyan-500'
                                      : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                  )}
                                >
                                  {t('nav.signout')}
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <p className="text-center text-cyan-600 font-bold mt-4">
                    {user.username
                      ? user.username + ' ' + user.usersurname
                      : user.displayName}
                  </p>
                  <ul className="flex flex-col  mx-10 mt-8">
                    {linksToDisplay}{' '}
                  </ul>
                </div>
              ) : (
                <div>
                  <br />
                  <br />
                  <div className="flex justify-center">
                    <Button name={t('nav.signup')} path="/signup" />
                  </div>
                  <br />
                  <div className="flex justify-center">
                    <p className="text-cyan-400 font-medium pr-1">
                      Already a member?
                    </p>
                    <Link className="text-cyan-600 font-medium" to="/signin">
                      Sign in
                    </Link>
                  </div>
                  <ul className="flex flex-col  mx-10 mt-24">
                    {linksToDisplay}{' '}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <h1 className="self-center mx-auto max-md:text-xl pr-4 text-3xl text-cyan-600 font-bold">
              {page}
            </h1>
          )}
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
