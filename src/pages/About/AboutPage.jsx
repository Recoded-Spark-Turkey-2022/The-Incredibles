import React from 'react';
import Story from './Story';
import CallToAction from './CallToAction';
import Team from './Team';
import Location from '../Home/Location';
import Partners from '../Home/Partners';

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
