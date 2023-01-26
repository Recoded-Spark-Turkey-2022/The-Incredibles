import React from 'react';
import Button from '../Button';
import story from '../../assets/pics/aboutpage/story.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import Container from '../Container';
function CallToAction() {
  const [user] = useAuthState(auth);
  return (
    <Container>
      <div className="">
        <img src={story} className=" m-auto " />
      </div>
      <div className="text-center p-10 max-md:px-0 max-md:py-5">
        <h4 className="font-normal text-3xl py-5 text-cyan-600">
          Share your story, help others and get help from others
        </h4>
        <div className="text-center  ">
          <p className="text-zinc-400	font-light  sm:text-xl text-base ">
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
      <div className={user ? 'hidden' : 'text-center'}>
        <Button name="Sign Up" path="/signup" />
      </div>
    </Container>
  );
}

export default CallToAction;
