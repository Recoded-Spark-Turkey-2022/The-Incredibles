import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import Signup from './Signup';
import { provider } from '../../firebase/firebase';

function Signin() {



  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const onLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    useNavigate('/');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
    <>
    <div className="">

      <form onSubmit={handleSubmit}>
        <div className="w-full p-6 m-auto bg-white rounded-md  ring-2 ring-white-600 lg:max-w-xl">
        <h1 className=" text-lg font-bold text-center text-cyan-700 mb-3 uppercase decoration-wavy">
        Sign İn With
      </h1>
          <button
            onClick={handleGoogleSignIn}
            className="text-white  p-4  font-small rounded-lg flex align-right  "
          >
            <GoogleButton />
          </button>
          <div className="relative flex items-center justify-center mb-6 w-full mt-6 border border-t">
            <div className="absolute px-5 bg-white">Or</div>
          </div>

          <input
            className="form-control block w-full px-4 mb-3 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Email"
            onChange={(e) => setLoginEmail(e.target.value)}
            required
            type="email"
          />
          <input
            className="form-control block w-full px-4 mb-3 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
            required
            type="password"
          />
          <button
            className="h-10 px-10 py-2.5  bg-cyan-600 text-white font-medium text-l leading-tight
       rounded-full shadow-md
       justify-center items-center
       ease-in duration-300 hover:bg-purple-700 hover:shadow-lg ml-1  hover:scale-110"
            onClick={onLogin}
            type="button"
          >
            Sign İn
          </button>
          <p className="text-sm font-semibold mt-2 pt-1 mb-0">
            Want to be a member?
            <a
              href="#!"
              className="text-cyan-600 hover:text-white-700 focus:text-white-700 transition duration-200 ease-in-out "
            >
              <Link to="/Signup"> Sign Up </Link>
            </a>
          </p>
        </div>
      </form>
    </div>
  </>
  );
}

export default Signin;
