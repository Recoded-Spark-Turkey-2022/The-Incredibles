import Navbar from '../../components/Navbar';
import Brief from '../../components/Brief';
import AboutSection from '../../components/AboutSection';
import Location from '../../components/LocationSection';
import Partners from '../../components/Partners';
import Stories from '../../components/LatestStories';
import Footer from '../../components/Footer';

function HomePage() {
  return (
    <section name="home">
      <Navbar />
      <Brief />
      <AboutSection />
      <Location />
      <Partners />
      <Stories />
      <Footer />
    </section>
  );
}

export default HomePage;
