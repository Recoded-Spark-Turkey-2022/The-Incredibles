import Button from '../../components/Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import HomeImage from '../../assets/pics/homepage/hero.svg';
import { useTranslation } from 'react-i18next';

function Brief() {
  const [t] = useTranslation();
  const [user] = useAuthState(auth);

  return (
    <div name="main" className="container m-auto flex flex-col-reverse sm:flex-row sm:justify-between px-10 sm:h-auto ">
      <div name="wirtting" className="sm:w-1/2 sm:text-left text-center">
        <h1 className="font-bold sm:text-7xl text-cyan-600 text-5xl my-5">
          {t('home.home.h1')}
        </h1>
        <h2 className="sm:text-5xl text-3xl  my-5 text-rose-400 font-medium ">
          {t('home.home.h2')}
        </h2>
        <div className="">
          <p className="sm:text-xl text-m">{t('home.home.p')}</p>
        </div>

        <div className={user ? 'hidden' : 'my-5'}>
          <Button name={t('nav.signup')} path="/signup" />
        </div>
      </div>
      <div name="image" className="m-auto sm:w-1/2">
        <img src={HomeImage} alt="logo" className="" />
      </div>
    </div>
  );
}
export default Brief;
