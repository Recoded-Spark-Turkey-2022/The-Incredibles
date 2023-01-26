import React from 'react';
import Worldmap from '../../assets/pics/homepage/world-map.svg';
import LocationSlide from '../LocationSlides';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import '../../style/slick.css';
import '../../style/slick-theme.css';
import Container from '../Container';

function Location() {
  const [t] = useTranslation();

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 5000,
    swipeToSlide: true,
  };

  return (
    <Container>
      <div
        name="main"
        className=" flex justify-between max-md:flex-col pt-12 gap-5"
      >
        <div name="Photo" className=" h-fit m-auto">
          <img src={Worldmap} alt="world-map" />
        </div>

        <div
          name="paragraphs"
          className=" h-fit md:w-1/2 flex justify-center flex-col align-middle max-md:mt-5"
        >
          <div className=" ">
            <Slider {...settings}>
              {slides.map((slide, slideIndex) => (
                <LocationSlide key={slideIndex} data={slide} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Location;
