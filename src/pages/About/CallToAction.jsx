import React from 'react';
import Button from '../../components/Button';
import callToActionImg from '../../assets/pics/aboutpage/aboutpgCallToAction.svg';

function CallToAction() {
  return (
    <div className="container mx-auto text-center">
      <div className="">
        <img src={callToActionImg} className=" m-auto" />
      </div>
      <div className="">
        <h4 className="font-normal text-2xl text-cyan-600">
          Share your story, help others and get help from others
        </h4>
        <div className="text-center w-2/4 m-auto pb-3 pt-5 ">
          <p className="text-zinc-400	font-light  ">
            But Brooke Chaffin and Catherine Connors are looking to change that
            with the introduction of Maverick, a social network that connects
            young girls with female mentors to express their creativity in a
            safe space.
          </p>
        </div>
      </div>
      <div>
        <Button name="Sign Up" path="/signup" />
      </div>
    </div>
  );
}

export default CallToAction;
