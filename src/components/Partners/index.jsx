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
import Container from '../Container';
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
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 5000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplaySpeed: 1000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
    <Container>
      <div className=" my-10">
        <h1 className="text-center font-bold text-3xl">{t('home.partner')}</h1>

        <div className="max-w-screen-xl m-auto flex-row p-7">
          <Slider {...settings} className="py-5">
            {partners.map((par, i) => (
              <div key={i} className="lg:px-10 px-5 ">
                <img src={par} alt="partner-logo" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
}

export default Partners;
