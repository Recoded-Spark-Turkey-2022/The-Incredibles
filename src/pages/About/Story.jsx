import React from 'react';
import AboutPHero from '../../assets/pics/aboutpage/aboutp-hero.svg';

function Story() {
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
          Our Story
        </h2>

        <p className=" w-3/4 font-medium text-lg max-lg:w-full px-10 pb-20">
          We believe that everyone deserves to live with dignity, respect, and
          the opportunity to reach their full potential. That is why we are
          dedicated to providing support and resources to refugees, who have
          fled their homes due to conflict, persecution, or other
          life-threatening circumstances. Our organization was founded by a
          group of passionate individuals who saw the need for more
          comprehensive, compassionate care for refugees. Since then, we have
          grown to become a leading provider of assistance to refugees in
          different countries. Through our website, we offer a range of services
          to refugees, including housing, medical care, education, and
          employment support. We also work to advocate for the rights and needs
          of refugees on the local, national, and international level. But our
          work would not be possible without the support of people like you. By
          donating, volunteering, or spreading awareness about the refugee
          crisis, or just go and post welcoming new refugees in your country by
          providing information that is help them adapting their new life! You
          can make a meaningful difference in the lives of refugees. We are
          proud of the impact that we have made so far, but there is still much
          more work to be done. Join us in our mission to build a more inclusive
          and welcoming world for all!
        </p>
      </div>
    </section>
  );
}

export default Story;
