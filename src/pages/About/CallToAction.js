import React from 'react';
import callToActionImg from '../../assets/pics/aboutpage/aboutpgCallToAction.svg';

function CallToAction() {
  return (
    <div className='container mx-auto text-center'>
      <div className=''>
        <img src={callToActionImg} className=' m-auto'/>
      </div>
      <div className=''>
        <h4 className='font-normal text-2xl text-cyan-600'>
        Share your story, help others and get help from others
        </h4>
        <div className='text-center w-2/4 m-auto pb-3 pt-5 '>
        <p className='text-zinc-400	font-light  '>
        But Brooke Chaffin and Catherine Connors are looking to change that with the introduction of Maverick, a social network that connects young girls with female mentors to express their creativity in a safe space.
        </p>
        </div>
        
      </div>
      <div>
      <button
          type="button"
          className=" h-10 px-10 py-2.5 bg-cyan-600 text-white font-medium text-l leading-tight 
             rounded-full shadow-md
             ease-in duration-300 hover:bg-purple-700 hover:shadow-lg  hover:scale-110"
        >
          Sign Up
        </button>
      </div>

    </div>
  );
}

export default CallToAction;
