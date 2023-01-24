import Button from '../../components/Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import HomeImage from '../../assets/pics/homepage/hero.svg';
import { useTranslation } from 'react-i18next';

function Brief() {
  const [t] = useTranslation();
  const [user] = useAuthState(auth);

  return (
    <div name="main" className="container m-auto flex flex-col-reverse lg:flex-row lg:justify-between py-10 lg:h-auto max-w-screen-xl ">
      <div name="wirtting" className="lg:w-1/2 lg:text-left text-center">
        <h1 className="font-bold lg:text-7xl text-cyan-600 text-5xl my-5">
          {t('home.home.h1')}
        </h1>
        <h2 className="lg:text-5xl text-3xl  my-5 text-rose-400 font-medium ">
          {t('home.home.h2')}
        </h2>
        <div className="">
          <p className="lg:text-xl text-m">{t('home.home.p')}</p>
        </div>

        <div className={user ? 'hidden' : 'my-5'}>
          <Button name={t('nav.signup')} path="/signup" />
        </div>
      </div>
      <div name="image" className="m-auto lg:w-1/2">
        <img src={HomeImage} alt="logo" className="" />
      </div>
    </div>
  );
}
export default Brief;
