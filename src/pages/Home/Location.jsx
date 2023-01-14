import React, { useState } from 'react';
import Worldmap from '../../assets/pics/homepage/world-map.svg';
import LocationSlide from './LocationSlide';
import { useTranslation } from 'react-i18next';

function Location() {
  const [t, i18n] = useTranslation();

  const slides = [
    {
      text: `${t('home.location.text1')}`,
      author: 'Omer,',
    },
    {
      text: `${t('home.location.text2')}`,
      author: 'Ahmad,',
    },
    {
      text: `${t('home.location.text3')}`,
      author: 'Miray,',
    },
    {
      text: `${t('home.location.text4')}`,
      author: 'Rabia,',
    },
  ];
  const [current, setCurrent] = useState(0);

  // for making the pointer working bellow the text
  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };

  return (
    <div
      name="main"
      className="lg:py-44 lg:px-14 mx-20 flex justify-between max-lg:flex-col max-lg:py-10"
    >
      <div name="Photo" className=" h-fit">
        <img src={Worldmap} alt="world-map" />
      </div>

      <div
        name="paragraphs"
        className=" h-fit lg:w-1/3 flex justify-center flex-col align-middle max-lg:mt-5"
      >
        <LocationSlide data={slides[current]} />

        {/* points for clicking and slicking */}
        <div className=" flex pt-4 max-lg:justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className=" "
            >
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="2"
                className="focus:border-blue-500 focus:bg-blue-500 rounded-full p-1 mx-1 border-solid border-2 border-gray-300"
                aria-current="false"
                aria-label="Slide 1"
              ></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Location;
