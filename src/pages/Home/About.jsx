import React from 'react';
import Button from '../../components/Button';
import AboutHero from '../../assets/pics/homepage/about-hero.svg';
import AboutStar from '../../assets/pics/homepage/about-star.svg';

function About() {
  return (
    <section name="about" className="bg-emerald-50">
      <div
        name="about-header"
        className="text-center lg:p-20 lg:mx-10 max-lg:pt-10 "
      >
        <h1 className="text-cyan-600 lg:pb-8 font-bold text-4xl max-lg:mb-4">
          About
        </h1>

        <p className="mx-20 lg:px-40 lg:pb-10">
        Welcome to our website! We are a group of volunteers dedicated to helping refugees navigate their new lives and communities. 
        We understand that the journey to seeking refuge can be incredibly difficult and disorienting, and we want to do everything 
        we can to make the transition as smooth as possible.Our team is made up of individuals from all walks of life, united in our 
        belief that everyone deserves a chance at a better future. We offer a range of services, including language classes, 
        cultural orientation, legal assistance, and support finding housing and employment.We believe in the power of community and 
        connection, and we strive to create a welcoming and supportive environment for all of our members. 
        Thank you for visiting our website and for considering how you can help make a difference in the lives of refugees.

        </p>
        <div className="my-9">
          <Button name="Learn More" path="about" />
        </div>
      </div>
      <div
        name="about-body"
        className="flex lg:justify-between max-lg:flex-col-reverse max-lg:items-center max-lg:text-center lg:px-20"
      >
        <div name="cards" className="flex lg:justify-start ">
          <div name="left-side-cards" className="lg:">
            <div className="lg:p-6  max-w-sm mx-auto lg:space-x-4 ">
              <h2 className="flex  lg:justify-start lg:font-bold max-lg:flex-col max-lg:items-center">
                <img
                  src={AboutStar}
                  alt="about-star"
                  className="lg:mx-3 max-lg:w-10"
                />
                Dependability 
              </h2>
              <p className="lg:pt-6 flex-wrap">
              We are committed to being dependable and trustworthy, 
              and we work hard to follow through on our commitments 
              to refugees by giving fresh and truth information.{' '}
              </p>
            </div>
            <div className="lg:p-6 max-w-sm mx-auto space-x-4 max-lg:hidden ">
              <h2 className="flex justify-start font-bold">
                <img src={AboutStar} alt="about-star" className="mx-3" />
                Determination
              </h2>
              <br />
              <p>
              We are determined to help refugees overcome obstacles and achieve their goals.
              </p>
            </div>
          </div>
          <div name="right-side-cards" className="max-lg:hidden">
            <div className="lg:p-6 max-w-sm mx-auto space-x-4 ">
              <h2 className="flex justify-start font-bold">
                <img src={AboutStar} alt="about-star" className="mx-3" />
                Collaboration
              </h2>
              <br />
              <p>
              We believe that collaboration is key to achieving success, 
              and we work with a network of partners and community organizations to support refugees.
              </p>
            </div>
            <div className="lg:p-6 max-w-sm mx-auto space-x-4">
              <h2 className="flex justify-start font-bold">
                <img src={AboutStar} alt="about-star" className="mx-3" />
                Productivity
              </h2>
              <br />
              <p>
              We work efficiently and effectively to help refugees make the most of their opportunities.
              </p>
            </div>
          </div>
        </div>
        <div
          name="side-hero"
          className="flex justify-end max-lg:justify-center "
        >
          <img src={AboutHero} alt="about-hero" className="max-lg:w-1/2" />
        </div>
      </div>

      <div className="carousel-indicators right-0 bottom-0 left-0 hidden max-lg:flex justify-start lg:px-20 pb-20 m-10 max-lg:justify-center">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="0"
          className="rounded-full inline-block p-1 mx-1 border-solid border-2 border-cyan-600 bg-cyan-600"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="1"
          className="rounded-full inline-block p-1 mx-1 border-solid border-2 border-gray-300"
          aria-current="false"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="2"
          className="rounded-full p-1 mx-1 border-solid border-2 border-gray-300"
          aria-current="false"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="3"
          className="rounded-full p-1 mx-1 border-solid border-2 border-gray-300"
          aria-current="false"
          aria-label="Slide 1"
        ></button>
      </div>
    </section>
  );
}

export default About;
