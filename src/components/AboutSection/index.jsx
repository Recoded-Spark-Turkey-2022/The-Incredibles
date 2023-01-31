import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import '../../style/slick.css';
import '../../style/slick-theme.css';
import Button from '../UI/Button';
import Container from '../UI/Container';
import AboutStar from '../../assets/pics/homepage/about-star.svg';
import AboutHero from '../../assets/pics/homepage/about-hero.svg';

function AboutSection() {
  const { t } = useTranslation();

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
    <section name="" className="bg-emerald-50 ">
      <Container>
        <div className="">
          <div name="about-header" className=" m-auto text-center ">
            <h1 className="text-cyan-600 py-4 font-bold sm:text-4xl  text-2xl ">
              {t('home.about.h1')}
            </h1>

            <p className="sm:text-xl md:px-2 text-base">{t('home.about.p')}</p>
            <div className="my-5 ">
              <Button name={t('home.about.learnmore')} path="about" />
            </div>
          </div>
          <div
            name="about-body"
            className="flex sm:justify-between max-md:flex-col-reverse max-md:items-center max-md:text-center md:px-5"
          >
            <div name="cards" className="flex md:justify-start max-md:hidden ">
              <div name="left-side-cards" className="">
                <div className="md:p-6  max-w-sm mx-auto md:space-x-4 ">
                  <h2 className="flex  md:justify-start md:font-bold max-md:flex-col max-md:items-center">
                    <img
                      src={AboutStar}
                      alt="about-star"
                      className="md:mx-3 max-md:w-10"
                    />
                    {t('home.about.section.h1')}
                  </h2>
                  <p className="md:pt-6 flex-wrap">
                    {t('home.about.section.p1')}
                  </p>
                </div>
                <div className="md:p-6 max-w-sm mx-auto space-x-4 max-md:hidden ">
                  <h2 className="flex justify-start font-bold">
                    <img src={AboutStar} alt="about-star" className="mx-3" />
                    {t('home.about.section.h2')}
                  </h2>
                  <br />
                  <p>{t('home.about.section.p2')}</p>
                </div>
              </div>
              <div name="right-side-cards" className="max-md:hidden">
                <div className="md:p-6 max-w-sm mx-auto space-x-4 ">
                  <h2 className="flex justify-start font-bold">
                    <img src={AboutStar} alt="about-star" className="mx-3" />
                    {t('home.about.section.h3')}
                  </h2>
                  <br />
                  <p>{t('home.about.section.p3')}</p>
                </div>
                <div className="md:p-6 max-w-sm mx-auto space-x-4">
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
              className="flex justify-end max-md:justify-center "
            >
              <img src={AboutHero} alt="about-hero" className="" />
            </div>
          </div>

          <div className="m-auto text-center md:hidden">
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
      </Container>
    </section>
  );
}

export default AboutSection;
