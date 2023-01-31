import Brief from '../../components/Brief';
import AboutSection from '../../components/AboutSection';
import Location from '../../components/LocationSection';
import Partners from '../../components/Partners';
import Stories from '../../components/LatestStories';

function HomePage() {
  return (
    <section name="home">
      <Brief />
      <AboutSection />
      <Location />
      <Partners />
      <Stories />
    </section>
  );
}

export default HomePage;
