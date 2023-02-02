import Container from '../../components/UI/Container';
import Button from '../../components/UI/Button';
import Error from '../../assets/pics/404/error.svg';

function NotFoundPage() {
  return (
    <section name="404" className="bg-emerald-50  h-full max-md:h-screen">
      <div
        name="error-body"
        className=" flex items-center gap-5 h-screen md:justify-around max-md:flex-col-reverse max-md:text-center md:px-5"
      >
        <div
          name="navhome"
          className="flex items-center md:w-1/2 max-md:w-full m-auto"
        >
          <div className="relative m-auto">
            <img src={Error} alt="404" className="h-full" />
            <div className="absolute top-20 left-20 ">
              <Button name="Home" path="/" />
            </div>
          </div>
        </div>

        <div
          name="navcontact"
          className="text-center md:w-1/2 max-md:w-full mt-5"
        >
          <h2 className="font-bold md:text-7xl text-cyan-600 text-5xl py-5">
            Oh, no!
          </h2>
          <h1 className="text-cyan-600 py-4 font-bold md:text-4xl  text-2xl">
            Error 404
          </h1>
          <p className="text-lg py-4 text-rose-400">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable...
          </p>
          <h3 className="text-lg pb-4 text-rose-400">
            If the problem you faced remains, you can contact us here:
          </h3>
          <Button name="Contact us" path="/contact" />
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
