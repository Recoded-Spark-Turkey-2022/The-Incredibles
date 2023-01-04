import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ref, set } from 'firebase/database';
import { auth, db } from '../../firebase/firebase';
import GoogleButton from 'react-google-button';
import { provider } from '../../firebase/firebase';
// import bgbaloon from '../../assets/pics/signuppage/bgbaloon.svg';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function onRegister() {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        set(ref(db, 'users/', userCredential.user.uid), {
          firstName,
          lastName,
          email,
        });
      }
    );
    navigate('/');
  }
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
      <div className="w-50 flex items-center justify-center h-50 relative bg-gradient-to-r">
        <div
          className="
p-6 m-auto bg-white rounded-md shadow-xl   ring-2 ring-white-600 lg:max-w-xl
    px-8 justify-center flex  w-50 md:container
      h-full text-gray-800"
        >
          <form onSubmit={handleSubmit}>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
              <p className="text-lg font-bold text-cyan-700 mb-0 mr-4">
                Sign Up With
              </p>

              <button
                onClick={handleGoogleSignIn}
                className="text-white  p-4  font-small rounded-lg flex align-middle  "
              >
                <GoogleButton />
              </button>
            </div>

            <div className=" flex-col-reverse items-center justify-center lg:justify-start">
              <div className="relative flex items-center justify-center mb-6 w-full mt-6 border border-t">
                <div className="absolute px-5 bg-white">Or</div>
              </div>
              <input
                className="form-control block w-full px-4 mb-3 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                className="form-control block w-full px-4 mb-3 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />

              <input
                className="form-control block w-full px-4 mb-3 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />

              <input
                className="form-control block w-full px-4 mb-3 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
              />
              <input
                className="form-control block w-full px-4 mb-3 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Confirm password"
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
              />

              <button
                className=" h-10 px-10 py-2.5  bg-cyan-600 text-white font-medium text-l leading-tight
       rounded-full shadow-md
       justify-center items-center
       ease-in duration-300 hover:bg-purple-700 hover:shadow-lg ml-1  hover:scale-110"
                onClick={onRegister}
                type="button"
              >
                Sign Up
              </button>
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Already a member?
                <a
                  href="#!"
                  className="text-cyan-600 hover:text-white-700 focus:text-white-700 transition duration-200 ease-in-out "
                >
                  <Link to="/Signin"> Sign in </Link>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
