import Navbar from '../../components/Navbar';
import OurStory from '../../components/OurStory';
import CallToAction from '../../components/UserStory';
import OurTeam from '../../components/OurTeam';
import Location from '../../components/LocationSection';
import Partners from '../../components/Partners';
import Footer from '../../components/Footer';

// This component will be used as a container for About Page Components

function AboutPage() {
  return (
    <div name="aboutpage">
      <Navbar />
      <OurStory />
      <OurTeam />
      <Location />
      <Partners />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default AboutPage;
