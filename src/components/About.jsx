import React from 'react';
import AboutHero from '../assets/pics/about-hero.svg';
import AboutStar from '../assets/pics/about-star.svg';

function About() {
  return (
    <section name="about" className="bg-emerald-50">
      <div
        name="about-header"
        className="text-center lg:p-20 lg:mx-10 max-lg:pt-10 ... "
      >
        <h1 className="text-cyan-600 lg:pb-8 font-bold text-4xl max-lg:mb-4">
          About
        </h1>

        <p className="mx-20 lg:px-40 lg:pb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla est
          non repellat officia odio. Ipsam veniam, laudantium dolores
          praesentium nisi soluta impedit quae, suscipit fugit eveniet, qui
          tempora fugiat veritatis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vitae nostrum, sint eius voluptatum cum ratione
          labore expedita similique iste facilis sed totam cupiditate vero
          inventore reiciendis dolorem dolorum accusantium voluptatibus!
        </p>

        <button
          type="button"
          className="inline-block px-10 py-2.5 bg-cyan-600 text-white font-medium text-l leading-tight 
        rounded-full shadow-md
        ease-in duration-300 hover:bg-purple-700 hover:shadow-lg my-5 hover:scale-110"
        >
          Learn More
        </button>
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
                Reliability
              </h2>
              <p className="lg:pt-6 flex-wrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                cum debitis repellendus placeat maiores eaque corrupti rerum?
                Reiciendis nisi voluptas corrupti, aspernatur autem est vero
                necessitatibus optio laudantium rerum numquam.{' '}
              </p>
            </div>
            <div className="lg:p-6 max-w-sm mx-auto space-x-4 max-lg:hidden ">
              <h2 className="flex justify-start font-bold">
                <img src={AboutStar} alt="about-star" className="mx-3" />
                Efficiency
              </h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, quidem sit minus dolore explicabo velit quas
                temporibus sequi vitae aut ducimus nostrum beatae eveniet atque
                ullam, quisquam aliquam sed est.
              </p>
            </div>
          </div>
          <div name="right-side-cards" className="max-lg:hidden">
            <div className="lg:p-6 max-w-sm mx-auto space-x-4 ">
              <h2 className="flex justify-start font-bold">
                <img src={AboutStar} alt="about-star" className="mx-3" />
                Motivation
              </h2>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates, quaerat, molestiae vitae sed aliquid in nostrum
                laborum obcaecati optio expedita atque ab ipsam veritatis iure
                iusto similique quibusdam laboriosam sunt.
              </p>
            </div>
            <div className="lg:p-6 max-w-sm mx-auto space-x-4">
              <h2 className="flex justify-start font-bold">
                <img src={AboutStar} alt="about-star" className="mx-3" />
                Creativity
              </h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit ex et commodi consequuntur, vel quis alias perferendis
                magni minima labore. Totam doloribus incidunt velit odio
                corrupti beatae quasi minima laudantium.
              </p>
            </div>
          </div>
        </div>
        <div
          name="side-hero"
          className="flex justify-end max-lg:justify-center max-lg:"
        >
          <img src={AboutHero} alt="about-hero" className="max-lg:w-1/2" />
        </div>
      </div>

      <div className="carousel-indicators right-0 bottom-0 left-0 flex justify-start lg:px-20 pb-20 m-10 max-lg:justify-center">
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
