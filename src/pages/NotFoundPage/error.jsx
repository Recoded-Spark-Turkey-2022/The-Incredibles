import Container from '../../components/UI/Container';
import Button from '../../components/UI/Button';
import Error from '../../assets/pics/404/error.svg';

function NotFoundPage() {
  return (
    <section
      name="404"
      className="bg-emerald-50 py-8 lg:h-full max-lg:h-screen"
    >
      <div
        name="error-body"
        className="h-24 min-h-full flex items-center lg:h-screen sm:justify-between max-lg:flex-col-reverse max-lg:text-center md:px-5"
      >
        <div name="navhome" className="items-center lg:w-1/2 max-lg:w-1/3">
          <div className="md:relative max-md:absolute lg:top-32 lg:left-40 max-lg:top-8 max-lg:right-8">
            <Button name="Home" path="/" />
          </div>
          <div className="md:flex md:justify-center max-md:hidden">
            <img src={Error} alt="404" className="h-full" />
          </div>
        </div>
        <div
          name="navcontact"
          className="text-center lg:w-1/2 max-lg:w-full max-lg:pt-8"
        >
          <h2 className="font-bold text-cyan-600 text-5xl md:my-5 max-md:my-1">
            Oh, no!
          </h2>
          <h1 className="text-cyan-600 md:py-4 max-md:py-1 font-bold md:text-4xl max-md:text-3xl">
            Error 404
          </h1>
          <p className="lg:text-lg my-5 text-rose-400">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable...
          </p>
          <h3 className="lg:text-lg my-5 text-rose-400">
            If the problem you faced remains, you can contact us here:
          </h3>
          <Button name="Contact us" path="/contact" />
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
