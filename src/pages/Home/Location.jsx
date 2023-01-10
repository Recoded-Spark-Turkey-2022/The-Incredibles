import React, { useState } from 'react';
import Worldmap from '../../assets/pics/homepage/world-map.svg';
import LocationSlide from './LocationSlide';

function Location() {
  const slides = [
    {
      text: '"Working with the team at Refubook has been an incredibly rewarding experience. It is heartwarming to see the positive impact we are having on the lives of refugees every day."',
      author: 'Omer,',
    },
    {
      text: '"Proud to be a part of the Refubook team and am constantly impressed by the compassion and professionalism of my colleagues. It is a pleasure to work with such a dedicated group of individuals who are committed to making a difference in the lives of refugees"',
      author: 'Ahmad,',
    },
    {
      text: '"As a member of the Refubook team, I am constantly amazed by the impact our work has on the lives of refugees. It is truly fulfilling to be a part of this organization."',
      author: 'Miray,',
    },
    {
      text: 'Being a part of the Refubook team has allowed me to make a meaningful difference in the lives of refugees. It is an honor to be able to contribute to such a important and necessary cause.',
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
