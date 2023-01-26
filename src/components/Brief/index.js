import Button from '../../components/UI/Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import HomeImage from '../../assets/pics/homepage/hero.svg';
import { useTranslation } from 'react-i18next';
import Container from '../UI/Container';

function Brief() {
  const [t] = useTranslation();
  const [user] = useAuthState(auth);

  return (
    <Container>
      <div
        name="main"
        className="flex flex-col-reverse md:flex-row md:justify-between md:h-auto "
      >
        <div name="wirtting" className="md:w-1/2 md:text-left text-center">
          <h1 className="font-bold md:text-7xl text-cyan-600 text-5xl my-5">
            {t('home.home.h1')}
          </h1>
          <h2 className="md:text-5xl text-3xl  my-5 text-rose-400 font-medium ">
            {t('home.home.h2')}
          </h2>
          <div className="">
            <p className="sm:text-xl text-base">{t('home.home.p')}</p>
          </div>

          <div className={user ? 'hidden' : 'my-5'}>
            <Button name={t('nav.signup')} path="/signup" />
          </div>
        </div>
        <div name="image" className="m-auto md:w-1/2">
          <img src={HomeImage} alt="logo" className="" />
        </div>
      </div>
    </Container>
  );
}
export default Brief;
