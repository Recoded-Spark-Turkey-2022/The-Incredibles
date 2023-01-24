import React from 'react';
import Story from '../../components/OurStory';
import CallToAction from '../../components/UserStory';
import Team from '../../components/OurTeam';
import Location from '../../components/LocationSection';
import Partners from '../../components/Partners';

// This component will be used as a container for About Page Components

function AboutPage() {
  return (
    <div name="aboutpage">
      <Story />
      <Team />
      <Location />
      <Partners />
      <CallToAction />
    </div>
  );
}

export default AboutPage;
