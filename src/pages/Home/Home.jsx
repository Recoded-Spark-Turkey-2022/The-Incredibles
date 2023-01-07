import React from 'react';
import HomeImage from '../../assets/pics/homepage/hero.svg';
import Stories from './Stories';
import About from './About';
import Partners from './Partners';
import Location from './Location';
import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function Home() {
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
            welcome to our project, I do not know what to write here <br />
            for now I will just leave it like this and we can decide later{' '}
            <br />I think thats it for now{' '}
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

export default Home;
