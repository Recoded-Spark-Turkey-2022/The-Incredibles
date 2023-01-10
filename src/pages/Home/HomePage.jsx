import React from 'react';
import HomeImage from '../../assets/pics/homepage/hero.svg';
import Stories from './Stories';
import About from './About';
import Partners from './Partners';
import Location from './Location';
import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function HomePage() {
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
          <h1 className="font-bold text-7xl text-cyan-600">Refubook</h1>
          <h2 className="text-5xl my-5 text-rose-400 font-medium lg:w-10">
            Express Freely
          </h2>
          <p className="text-xl">
             We believe in the power of community and connection, and we strive <br />
             to create a welcoming and supportive environment for all of our members. {' '}
            <br />Welcom to our website! From now thank you for considering how you can 
            <br />help make a difference in the lives of refugees! {' '}
          </p>
          <div className="my-9">
            <Button name="Sign Up" path="/signup" />
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
