import React from 'react';
import Button from '../Button';
import AboutHero from '../../assets/pics/homepage/about-hero.svg';
import AboutStar from '../../assets/pics/homepage/about-star.svg';
import { useTranslation } from 'react-i18next';

function About() {
  const [t, i18n] = useTranslation();

  return (
    <section name="about" className="bg-emerald-50 m-auto p-10">
      <div
        name="about-header"
        className="text-center w-3/4 m-auto "
      >
        <h1 className="text-cyan-600 py-4 font-bold sm:text-4xl  text-2xl">
          {t('home.about.h1')}
        </h1>

        <p className="sm:text-xl text-m">{t('home.about.p')}</p>
        <div className="my-5">
          <Button name={t('home.about.learnmore')} path="about" />
        </div>
      </div>
      <div
        name="about-body"
        className="flex sm:justify-between max-lg:flex-col-reverse max-lg:items-center max-lg:text-center lg:px-20"
      >
        <div name="cards" className="flex lg:justify-start ">
          <div name="left-side-cards" className="lg:">
            <div className="lg:p-6  max-w-sm mx-auto lg:space-x-4 ">
              <h2 className="flex  lg:justify-start lg:font-bold max-lg:flex-col max-lg:items-center">
                <img
                  src={AboutStar}
                  alt="about-star"
                  className="lg:mx-3 max-lg:w-10"
                />
                {t('home.about.section.h1')}
              </h2>
              <p className="lg:pt-6 flex-wrap">{t('home.about.section.p1')}</p>
            </div>
            <div className="lg:p-6 max-w-sm mx-auto space-x-4 max-lg:hidden ">
              <h2 className="flex justify-start font-bold">
                <img src={AboutStar} alt="about-star" className="mx-3" />
                {t('home.about.section.h2')}
              </h2>
              <br />
              <p>{t('home.about.section.p2')}</p>
            </div>
          </div>
          <div name="right-side-cards" className="max-lg:hidden">
            <div className="lg:p-6 max-w-sm mx-auto space-x-4 ">
              <h2 className="flex justify-start font-bold">
                <img src={AboutStar} alt="about-star" className="mx-3" />
                {t('home.about.section.h3')}
              </h2>
              <br />
              <p>{t('home.about.section.p3')}</p>
            </div>
            <div className="lg:p-6 max-w-sm mx-auto space-x-4">
              <h2 className="flex justify-start font-bold">
                <img src={AboutStar} alt="about-star" className="mx-3" />
                {t('home.about.section.h4')}
              </h2>
              <br />
              <p>{t('home.about.section.p4')}</p>
            </div>
          </div>
        </div>
        <div
          name="side-hero"
          className="flex justify-end max-lg:justify-center "
        >
          <img src={AboutHero} alt="about-hero" className="max-lg:w-1/2" />
        </div>
      </div>

      <div className="carousel-indicators right-0 bottom-0 left-0 hidden max-lg:flex justify-start lg:px-20 pb-20 m-10 max-lg:justify-center">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="0"
          className="rounded-full inline-block p-1 mx-1 border-solid border-2 border-cyan-600 bg-cyan-600"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="1"
          className="rounded-full inline-block p-1 mx-1 border-solid border-2 border-gray-300"
          aria-current="false"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="2"
          className="rounded-full p-1 mx-1 border-solid border-2 border-gray-300"
          aria-current="false"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="3"
          className="rounded-full p-1 mx-1 border-solid border-2 border-gray-300"
          aria-current="false"
          aria-label="Slide 1"
        ></button>
      </div>
    </section>
  );
}

export default About;
