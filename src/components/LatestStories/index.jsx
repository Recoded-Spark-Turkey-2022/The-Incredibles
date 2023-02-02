import React from 'react';
import { useTranslation } from 'react-i18next';
import pic1 from '../../assets/pics/homepage/stories/n1.jpeg';
import pic2 from '../../assets/pics/homepage/stories/n2.jpg';
import Container from '../UI/Container';

function Stories() {
  const [t] = useTranslation();

  return (
    <section
      name="stories"
      className="bg-cyan-600 max-md:flex max-md:justify-center max-md:flex-col max-md:items-center "
    >
      <Container>
        <div className="py-10 ">
          <h1 className=" sm:text-7xl text-5xl text-white  max-md:text-center">
            {t('home.latest.h1')}
          </h1>
          <p className="pt-5 text-white sm:text-xl text-base max-md:text-center md:w-1/2 ">
            {t('home.latest.p1')}
          </p>
        </div>

        <div className="m-auto flex flex-row  justify-around  max-md:flex-col max-md:justify-start py-5 mb-20 ">
          <img src={pic1} alt="some-image" className="w-1/2 max-md:w-full " />
          <div className="flex flex-col  w-1/3  max-md:pt-4 max-md:w-full max-md:mb-8">
            <label className="w-1/4 max-md:w-fit text-center p-1 rounded  bg-amber-200 text-cyan-600 font-bold ">
              {t('home.latest.section.label1')}
            </label>
            <h1 className="mt-5 mb-5 text-5xl text-white font-light max-md:text-2xl ">
              {t('home.latest.section.h1')}
            </h1>
            <div className="flex">
              <div className=" rounded-full  w-5 h-5 mt-1 md:w-10 md:h-10 bg-amber-200 "></div>
              <div className="flex flex-col ml-10 max-md:ml-4">
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

        <div className="m-auto flex flex-row  justify-around  max-md:flex-col max-md:justify-start py-5 mb-10 ">
          <img src={pic2} alt="some-image" className="w-1/2 max-md:w-full" />
          <div className="flex flex-col  w-1/3  max-md:pt-4 max-md:w-full">
            <label className="w-1/4 max-md:w-fit text-center p-1 rounded  bg-amber-200 text-cyan-600 font-bold">
              {t('home.latest.section.label2')}
            </label>
            <h1 className="mt-5 mb-5 text-5xl text-white font-light max-md:text-2xl">
              {t('home.latest.section.h2')}
            </h1>
            <div className="flex">
              <div className="rounded-full w-5 h-5 mt-1 md:w-10 md:h-10 bg-amber-200 "></div>
              <div className="flex flex-col ml-5 max-md:ml-4">
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
      </Container>
    </section>
  );
}

export default Stories;
