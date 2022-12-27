import React from 'react';
import AboutPHero from '../../assets/pics/aboutpage/aboutp-hero.svg';

function Story() {
  return (
    <section name="story" className="flex flex-col h-screen">
      <div
        name="hero-image"
        className="bg-gradient-to-t from-gray-300 to-transparent max-w-screen h-1/2"
      >
        <img src={AboutPHero} className="w-screen h-full" />
      </div>
      <div name="story" className="max-w-screen h-1/2">
        <h2 className="text-center text-6xl pt-20 pb-10 font-bold text-cyan-700">
          Our Story
        </h2>
        <div className="px-20 mx-20 pb-20">
          <p className="text-center px-20 mx-20 font text-xl max-w-screen">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using `Content here, content
            here`, making it look like readable English.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;
