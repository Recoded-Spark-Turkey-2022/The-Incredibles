import React from 'react';

function Stories() {
  return (
    <section name="stories" className="bg-cyan-600">
      <h1 className="mt-20 ml-28 pt-20 text-7xl text-white">Latest Stories</h1>
      <p className="mt-7 mb-20 ml-28 text-white text-xl">
        Home is behind, the world ahead and there are many <br />
        paths to tread through shadows to the edge.
      </p>
      {/* not: I am thinking of making the next div as component.. so we can always render the latest story.
        I will check it after the redux and the blog page is ready */}
      <div className="flex flex-row  justify-around pb-20 ">
        <img
          src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
          alt="some-image"
          className="w-1/3"
        />
        <div className="flex flex-col  w-1/3">
          <label className="w-1/4  text-center p-1 rounded  bg-amber-200 text-cyan-600 font-bold">
            Language
          </label>
          <h1 className="mt-5 mb-10 text-5xl text-white font-light ">
            some words to test bla bla bla and lksjdfl
          </h1>
          <div className="flex">
            <div className=" rounded-full w-10 h-10 bg-amber-200 "></div>
            <div className="flex flex-col ml-10">
              <p className="text-white font-bold ">Ahmad Fesal</p>
              <p className="text-zinc-300 font-light">Refugee in Turkey</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  justify-around pb-20 ">
        <img
          src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
          alt="some-image"
          className="w-1/3"
        />
        <div className="flex flex-col  w-1/3">
          <label className="w-1/4  text-center p-1 rounded  bg-amber-200 text-cyan-600 font-bold">
            Language
          </label>
          <h1 className="mt-5 mb-10 text-5xl text-white font-light">
            some words to test bla bla bla and lksjdfl
          </h1>
          <div className="flex">
            <div className=" rounded-full w-10 h-10 bg-amber-200 "></div>
            <div className="flex flex-col ml-10">
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
