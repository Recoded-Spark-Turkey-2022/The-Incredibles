import React from 'react';
import HomeImage from '../assets/pics/hero.svg';
import Stories from './Stories';
import About from './About';

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
          <button
            type="button"
            className="inline-block px-10 py-2.5 bg-cyan-600 text-white font-medium text-l leading-tight 
             rounded-full shadow-md
             ease-in duration-300 hover:bg-purple-700 hover:shadow-lg my-9 hover:scale-110"
          >
            Sign Up
          </button>
        </div>
        <div name="image" className="mt-14">
          <img src={HomeImage} alt="logo" className="" />
        </div>
      </div>
      <About />

      <Stories />
    </section>
  );
}

export default Home;
