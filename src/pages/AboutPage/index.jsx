import OurStory from '../../components/OurStory';
import OurTeam from '../../components/OurTeam';
import Location from '../../components/LocationSection';
import Partners from '../../components/Partners';
import UserStory from '../../components/UserStory';

function AboutPage() {
  return (
    <div name="aboutpage">
      <OurStory />
      <OurTeam />
      <Location />
      <Partners />
      <UserStory />
    </div>
  );
}

export default AboutPage;
