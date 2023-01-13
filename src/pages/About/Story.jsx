import React from 'react';
import AboutPHero from '../../assets/pics/aboutpage/aboutp-hero.svg';
import { useTranslation } from 'react-i18next';


function Story() {
  const [t,i18n]=useTranslation();

  return (
    <section name="story" className="">
      <div
        name="hero-image"
        className="bg-gradient-to-t from-gray-300 flex justify-center items-center to-transparent w-screen h-1/2  "
      >
        <img src={AboutPHero} className="w-full h-full  " />
      </div>
      <div
        name="story"
        className="w-screen h-1/2  mt-16  flex flex-col text-center items-center justify-center"
      >
        <h2 className="text-center  mb-10  text-6xl  font-bold text-cyan-700">
          {t("about.story.h")}
        </h2>

        <p className=" w-3/4 font-medium text-lg max-lg:w-full px-10 pb-20">
        {t("about.story.p")}

        </p>
      </div>
    </section>
  );
}

export default Story;
