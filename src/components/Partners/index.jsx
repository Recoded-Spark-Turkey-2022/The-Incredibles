import React from 'react';
import partner1 from '../../assets/pics/homepage/partners/n0.png';
import partner2 from '../../assets/pics/homepage/partners/n1.jpeg';
import partner3 from '../../assets/pics/homepage/partners/n2.png';
import partner4 from '../../assets/pics/homepage/partners/n3.png';
import partner5 from '../../assets/pics/homepage/partners/n4.jpeg';
import partner6 from '../../assets/pics/homepage/partners/n5.png';
import partner7 from '../../assets/pics/homepage/partners/n6.jpeg';
import partner8 from '../../assets/pics/homepage/partners/n7.jpeg';
import partner9 from '../../assets/pics/homepage/partners/n8.jpeg';
import Slider from 'react-slick';
import '../../style/slick.css';
import '../../style/slick-theme.css';

import { useTranslation } from 'react-i18next';

function Partners() {
  const [t] = useTranslation();
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 6000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplaySpeed: 1000,

        }},
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplaySpeed: 1000,

        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplaySpeed: 1000,
        },
      },
    ],
  };
  return (
    <div className="py-10 mt-10">
      <h1 className="text-center font-bold text-3xl">{t('home.partner')}</h1>
      <div className="">
        <div className="max-w-screen-xl m-auto flex-row p-7">
          <Slider {...settings} className='mx-10'>
          {partners.map((par, i) => (<div  key={i} className="px-10"> <img src={par}
                alt="partner-logo"
                className=" "
               /></div>))}
         
          </Slider>
        </div>
       
      </div>
    </div>
  );
}

export default Partners;
