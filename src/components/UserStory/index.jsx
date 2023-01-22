import React from 'react';
import Button from '../../components/Button';
import callToActionImg from '../../assets/pics/aboutpage/aboutpgCallToAction.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

function CallToAction() {
  const [user] = useAuthState(auth);
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
            After years of struggling as a refugee, while I was seeking on
            internet I found Refubook website and it changed my life immediately
            finally found a job that allowed me to provide for my family. I
            worked hard and saved every penny, determined to build a better
            future for my children. With the help of a kind Refubook community,
            I was able to put my kids through school and give them opportunities
            I never had. As I watch them pursue their dreams, I am filled with
            pride and gratitude for the journey that brought us here with this
            amazing Refubook members.
          </p>
        </div>
      </div>
      <div className={user ? 'hidden' : ''}>
        <Button name="Sign Up" path="/signup" />
      </div>
    </div>
  );
}

export default CallToAction;
