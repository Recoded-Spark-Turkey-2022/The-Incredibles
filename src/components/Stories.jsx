import React from 'react';

function Stories() {
  return (
    <section
      name="stories"
      className="bg-cyan-600 max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:items-center "
    >
      <h1 className="mt-20 ml-28 pt-20 text-7xl text-white max-lg:mt-6 max-lg:text-3xl max-lg:pt-6 max-lg:text-center max-lg:ml-0">
        Latest Stories
      </h1>
      <p className="mt-7 mb-20 ml-28 text-white text-xl max-lg:text-center max-lg:m-6 max-lg:pb-10">
        Home is behind, the world ahead and there are many <br />
        paths to tread through shadows to the edge.
      </p>
      {/* not: I am thinking of making the next div as component.. so we can always render the latest story.
        I will check it after the redux and the blog page is ready */}
      <div className="flex flex-row  justify-around pb-20 max-lg:flex-col max-lg:justify-start max-lg:pb-10 max-lg:w-1/2  max-lg: ">
        <img
          src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
          alt="some-image"
          className="w-1/3 max-lg:w-full "
        />
        <div className="flex flex-col  w-1/3  max-lg:pt-4 max-lg:w-full">
          <label className="w-1/4 max-lg:w-fit text-center p-1 rounded  bg-amber-200 text-cyan-600 font-bold ">
            Language
          </label>
          <h1 className="mt-5 mb-10 text-5xl text-white font-light max-lg:text-2xl ">
            some words to test bla bla bla and lksjdfl
          </h1>
          <div className="flex">
            <div className=" rounded-full w-10 h-10 bg-amber-200 "></div>
            <div className="flex flex-col ml-10 max-lg:ml-4">
              <p className="text-white font-bold ">Ahmad Fesal</p>
              <p className="text-zinc-300 font-light">Refugee in Turkey</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  justify-around pb-20 max-lg:flex-col max-lg:justify-start max-lg:pb-10 max-lg:w-1/2 ">
        <img
          src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
          alt="some-image"
          className="w-1/3 max-lg:w-full"
        />
        <div className="flex flex-col  w-1/3  max-lg:pt-4 max-lg:w-full">
          <label className="w-1/4 max-lg:w-fit text-center p-1 rounded  bg-amber-200 text-cyan-600 font-bold">
            Language
          </label>
          <h1 className="mt-5 mb-10 text-5xl text-white font-light max-lg:text-2xl">
            some words to test bla bla bla and lksjdfl
          </h1>
          <div className="flex">
            <div className=" rounded-full w-10 h-10 bg-amber-200 "></div>
            <div className="flex flex-col ml-10 max-lg:ml-4">
              <p className="text-white font-bold ">Ahmad Fesal</p>
              <p className="text-zinc-300 font-light">Refugee in Turkey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
