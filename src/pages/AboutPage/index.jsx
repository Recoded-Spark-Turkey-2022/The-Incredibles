import Navbar from '../../components/Navbar';
import OurStory from '../../components/OurStory';
import OurTeam from '../../components/OurTeam';
import Location from '../../components/LocationSection';
import Partners from '../../components/Partners';
import UserStory from '../../components/UserStory';
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
      <UserStory />
      <Footer />
    </div>
  );
}

export default AboutPage;
