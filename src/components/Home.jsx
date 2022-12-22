import React from 'react';
import HomeImage from '../assets/pics/hero.svg';
import SocialIcons from '../assets/pics/social.svg';

function Home() {
  return (
    <section name="home">
      <div name="main" className="flex flex-row ... justify-around">
        <div name="wirtting" className="my-20">
          <h1 className="font-bold text-7xl text-cyan-600">Refubook</h1>
          <h2 className="text-5xl my-10 text-rose-400 font-medium">
            Express <br />
            Freely
          </h2>
          <p>
            welcome to our project, I do not know what to write here <br />
            for now I will just leave it like this and we can decide later{' '}
            <br />I think thats it for now{' '}
          </p>
          <button
            type="button"
            className="inline-block px-10 py-2.5 bg-cyan-600 text-white font-medium text-l leading-tight  rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg my-9"
          >
            Sign Up
          </button>
        </div>
        <div name="image">
          <img src={HomeImage} alt="logo" />
        </div>
      </div>
      <div name="icons" className=" w-fit ml-14 py-5">
        <img src={SocialIcons} alt="social-media-icons" />
      </div>
    </section>
  );
}

export default Home;
