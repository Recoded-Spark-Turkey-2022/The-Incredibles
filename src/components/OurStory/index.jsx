import { useTranslation } from 'react-i18next';
import Container from '../UI/Container';
import AboutPHero from '../../assets/pics/aboutpage/support.png';

function OurStory() {
  const [t] = useTranslation();
  return (
    <section name="story" className="">
      <div
        name="hero-image"
        className="bg-emerald-50 max-w-2xl m-auto flex justify-center items-center  "
      >
        <img className="pt-20 " src={AboutPHero} />
      </div>
      <Container>
        <div
          name="story"
          className="  flex flex-col text-center items-center justify-center"
        >
          <h2 className="text-center  mb-10  sm:text-7xl   text-5xl font-bold text-cyan-700">
            {t('about.ourstory.h2')}
          </h2>

          <p className=" pb-20 sm:text-2xl text-base md:px-10">
            {t('about.ourstory.p')}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default OurStory;
