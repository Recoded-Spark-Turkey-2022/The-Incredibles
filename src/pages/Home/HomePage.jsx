import React from 'react';
import HomeImage from '../../assets/pics/homepage/hero.svg';
import Stories from '../../components/LatestStories';
import About from '../../components/AboutSection';
import Partners from '../../components/Partners';
import Location from '../../components/LocationSection';
import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const [t, i18n] = useTranslation();
  const [user] = useAuthState(auth);
  return (
    <section name="home">
      <div
        name="main"
        className="flex lg:flex-row lg:justify-around max-lg:flex-col-reverse max-lg:items-center justify-center "
      >
        <div
          name="wirtting"
          className="lg:my-20 max-lg:my-10 max-lg:text-center max-lg:flex-wrap"
        >
          <h1 className="font-bold text-7xl text-cyan-600">
            {t('home.home.h1')}
          </h1>
          <h2 className="text-5xl my-5 text-rose-400 font-medium lg:w-10">
            {t('home.home.h2')}
          </h2>
          <div className="">
            <p className="text-xl">{t('home.home.p')}</p>
          </div>

          <div className={user ? 'hidden' : 'my-9'}>
            <Button name={t('nav.signup')} path="/signup" />
          </div>
        </div>
        <div name="image" className="mt-14">
          <img src={HomeImage} alt="logo" className="" />
        </div>
      </div>
      <About />
      <Location />
      <Partners />
      <Stories />
    </section>
  );
}

export default HomePage;
