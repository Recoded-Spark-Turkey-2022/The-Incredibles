import React from 'react';
import Button from '../Button';
import AboutHero from '../../assets/pics/homepage/about-hero.svg';
import AboutStar from '../../assets/pics/homepage/about-star.svg';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import '../../style/slick.css';
import '../../style/slick-theme.css';

function About() {
  const [t, i18n] = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 4000,
    swipeToSlide: true,
  };
  return (
    <section name="about" className="bg-emerald-50 m-auto py-10">
      <div className="max-w-screen-xl m-auto">
        <div name="about-header" className="text-center w-5/6 m-auto ">
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
          <div name="cards" className="flex lg:justify-start max-lg:hidden ">
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
                <p className="lg:pt-6 flex-wrap">
                  {t('home.about.section.p1')}
                </p>
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
            <img src={AboutHero} alt="about-hero" className="" />
          </div>
        </div>

        <div className="m-auto text-center lg:hidden">
          <Slider {...settings} className="">
            <div className=" max-w-sm mx-auto space-x-4">
              <h2 className="font-bold">
                <img src={AboutStar} alt="about-star" className="m-auto" />
                {t('home.about.section.h1')}
              </h2>
              <p className="flex-wrap">{t('home.about.section.p1')}</p>
            </div>
            <div className=" max-w-sm mx-auto space-x-4 ">
              <h2 className="font-bold">
                <img src={AboutStar} alt="about-star" className="m-auto" />
                {t('home.about.section.h2')}
              </h2>
              <br />
              <p>{t('home.about.section.p2')}</p>
            </div>
            <div className=" max-w-sm mx-auto space-x-4 ">
              <h2 className="font-bold">
                <img src={AboutStar} alt="about-star" className="m-auto" />
                {t('home.about.section.h3')}
              </h2>
              <br />
              <p>{t('home.about.section.p3')}</p>
            </div>
            <div className="max-w-sm mx-auto space-x-4">
              <h2 className=" font-bold">
                <img src={AboutStar} alt="about-star" className="m-auto" />
                {t('home.about.section.h4')}
              </h2>
              <br />
              <p>{t('home.about.section.p4')}</p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default About;
