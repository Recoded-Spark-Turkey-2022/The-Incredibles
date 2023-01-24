import React from 'react';
import { useTranslation } from 'react-i18next';
import pic1 from '../../assets/pics/homepage/stories/n1.jpeg';
import pic2 from '../../assets/pics/homepage/stories/n2.jpg';

function Stories() {
  const [t] = useTranslation();

  return (
    <section
      name="stories"
      className="bg-cyan-600 max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:items-center "
    >
      <div className="max-w-screen-xl m-auto ">
        <div className="">
          <h1 className="mt-20 ml-28 pt-20 text-7xl text-white max-lg:mt-6 max-lg:text-3xl max-lg:pt-6 max-lg:text-center max-lg:ml-0">
            {t('home.latest.h1')}
          </h1>
          <p className="mt-7 mb-20 ml-28 text-white text-xl max-lg:text-center max-lg:m-6 max-lg:pb-10 lg:w-1/2 max-lg:px-5">
            {t('home.latest.p1')}
          </p>
          {/* not: I am thinking of making the next div as component.. so we can always render the latest story.
        I will check it after the redux and the blog page is ready */}
        </div>

        <div className="m-auto flex flex-row  justify-around pb-20 max-lg:flex-col max-lg:justify-start max-lg:pb-10 max-lg:w-1/2  max-lg: ">
          <img src={pic1} alt="some-image" className="w-1/3 max-lg:w-full " />
          <div className="flex flex-col  w-1/3  max-lg:pt-4 max-lg:w-full max-lg:mb-8">
            <label className="w-1/4 max-lg:w-fit text-center p-1 rounded  bg-amber-200 text-cyan-600 font-bold ">
              {t('home.latest.section.label1')}
            </label>
            <h1 className="mt-5 mb-10 text-5xl text-white font-light max-lg:text-2xl ">
              {t('home.latest.section.h1')}
            </h1>
            <div className="flex">
              <div className=" rounded-full w-10 h-10 bg-amber-200 "></div>
              <div className="flex flex-col ml-10 max-lg:ml-4">
                <p className="text-white font-bold ">
                  {t('home.latest.section.p1.1')}
                </p>
                <p className="text-zinc-300 font-light">
                  {t('home.latest.section.p1.2')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="m-auto flex flex-row  justify-around pb-20 max-lg:flex-col max-lg:justify-start max-lg:pb-10 max-lg:w-1/2 ">
          <img src={pic2} alt="some-image" className="w-1/3 max-lg:w-full" />
          <div className="flex flex-col  w-1/3  max-lg:pt-4 max-lg:w-full">
            <label className="w-1/4 max-lg:w-fit text-center p-1 rounded  bg-amber-200 text-cyan-600 font-bold">
              {t('home.latest.section.label2')}
            </label>
            <h1 className="mt-5 mb-10 text-5xl text-white font-light max-lg:text-2xl">
              {t('home.latest.section.h2')}
            </h1>
            <div className="flex">
              <div className=" rounded-full w-10 h-10 bg-amber-200 "></div>
              <div className="flex flex-col ml-10 max-lg:ml-4">
                <p className="text-white font-bold ">
                  {t('home.latest.section.p2.1')}
                </p>
                <p className="text-zinc-300 font-light">
                  {t('home.latest.section.p2.2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
