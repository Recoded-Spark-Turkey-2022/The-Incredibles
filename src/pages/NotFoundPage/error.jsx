import { useTranslation } from 'react-i18next';
import Container from '../../components/UI/Container';
import Button from '../../components/UI/Button';
import Error from '../../assets/pics/404/error.svg';

function NotFoundPage() {
  return (
    <section name="404" className="bg-emerald-50 h-screen">
      <Container>
        <div
          name="error-body"
          className="flex items-center lg:h-screen sm:justify-between max-lg:flex-col-reverse max-lg:text-center md:px-5"
        >
          <div name="navhome" className="items-center lg:w-1/2 max-lg:w-full">
            <div className="relative lg:top-32 lg:left-40 max-lg:top-32 max-lg:right-8 ">
              <Button name="Home" path="/" />
            </div>
            <div className="flex justify-center">
              <img src={Error} alt="404" className="h-full" />
            </div>
          </div>
          <div name="navcontact" className="text-center lg:w-1/2 max-lg:w-full max-lg:pt-24">
            <h2 className="font-bold md:text-7xl text-cyan-600 text-5xl my-5">
              Oh, no!
            </h2>
            <h1 className="text-cyan-600 py-4 font-bold sm:text-4xl  text-2xl">
              Error 404
            </h1>
            <p className="text-lg my-5 text-rose-400">
              The page you are looking for might have been removed, had its name
              changed or is temporarily unavailable...
            </p>
            <h3 className="text-lg my-5 text-rose-400">
              If the problem you faced remains, you can contact us here:
            </h3>
            <Button name="Contact us" path="/contact" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NotFoundPage;
