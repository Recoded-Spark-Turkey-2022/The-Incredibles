import React from 'react';
import Story from './Story';
import CallToAction from './CallToAction';
import Team from './Team';

// This component will be used as a container for About Page Components

function AboutPage() {
  return (
    <div name="aboutpage">
      <Story />
      <Team />
      {/* this part is a placeholder for Testimonials */}
      {/* this part is a placeholder for Partners */}
      <CallToAction />
    </div>
  );
}

export default AboutPage;
