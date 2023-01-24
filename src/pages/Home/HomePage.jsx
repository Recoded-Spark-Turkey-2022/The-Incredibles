import React from 'react';
import Stories from '../../components/LatestStories';
import About from '../../components/AboutSection';
import Partners from '../../components/Partners';
import Location from '../../components/LocationSection';
import Brief from '../../components/Brief';

function HomePage() {

  return (
    <section name="home" className=''>
      <Brief/>
      <About />
      <Location />
      <Partners />
      <Stories />
    </section>
  );
}

export default HomePage;
