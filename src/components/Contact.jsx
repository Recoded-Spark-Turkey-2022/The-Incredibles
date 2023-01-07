import React from 'react';
import largeScreen from '../assets/pics/contactPage/largeScreen.svg';
import smallScreen from '../assets/pics/contactPage/smallScreen.svg';
import faceIcon from '../assets/pics/contactPage/faceIcon.svg';
import instaIcon from '../assets/pics/contactPage/instaIcon.svg';
import twitterIcon from '../assets/pics/contactPage/twitterIcon.svg';


function Contact() {
  return (
    <div>
      <div className="m-auto w-9/12 flex flex-col sm:flex-row-reverse justify-center items-center">
        <div className="basis-1/2 m-auto w-6/12">
          <img src={largeScreen} className="m-auto hidden sm:flex" />
          <img src={smallScreen} className="m-auto sm:hidden" />
        </div>
        <div className=" basis-1/2  h-min w-11/12 text-center sm:text-left m-auto sm:max-w-xl px-10">
          <h1 className="pb-10 font-bold text-3xl text-cyan-600 sm:text-6xl">
            Get in Touch
          </h1>
          <p className="text-zinc-400	font-light pb-2 ">
            But Brooke Chaffin and Catherine Connors are looking to change that
            with the introduction.
          </p>
          <form
            action=""
            className=" pl-1 flex flex-col gap-2 justify-center sm:justify-start "
          >
            <label className="text-zinc-400	font-light text-left ">Email</label>
            <input
              type="email"
              placeholder="hello@gmail.com"
              className="border border-solid"
            />
            <textarea
              placeholder="Message"
              rows={8}
              className="border border-solid"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="m-auto sm:m-0 w-40 h-10 px-10 py-2.5 text-center bg-cyan-600 text-white font-medium text-l leading-tight 
             rounded-full shadow-md
             ease-in duration-300 hover:bg-purple-700 hover:shadow-lg  hover:scale-110"
            />
            <div className="flex flex-row py-9  justify-center sm:justify-start ">
              <img src={twitterIcon} alt="" className="p-2 m-auto sm:m-0" />
              <img src={instaIcon} alt="" className="p-2 m-auto sm:m-0" />
              <img src={faceIcon} alt="" className="p-2 m-auto sm:m-0" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
