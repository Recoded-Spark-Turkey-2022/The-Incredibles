import React from 'react';
import Button from '../UI/Button';
import story from '../../assets/pics/aboutpage/story.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import Container from '../UI/Container';
import { useTranslation } from 'react-i18next';

function CallToAction() {
  const [t] = useTranslation();
  const [user] = useAuthState(auth);
  return (
    <Container>
      <div className="">
        <img src={story} className=" m-auto " />
      </div>
      <div className="text-center p-10 max-md:px-0 max-md:py-5">
        <h4 className="font-normal text-3xl py-5 text-cyan-600">
        {t('about.story.h4')}
        </h4>
        <div className="text-center  ">
          <p className="text-zinc-400	font-light  sm:text-xl text-base ">
          {t('about.story.p')}
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
