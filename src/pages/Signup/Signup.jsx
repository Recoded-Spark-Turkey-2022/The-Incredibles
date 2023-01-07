import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import {
  auth,
  googleProvider,
  faceBookProvider,
} from '../../firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';



function Signup() {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  console.log(user)
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then(navigate('/blogs'))
      // .then((res) => console.log(res.user.displayName))
      // .catch((err) => console.log(err));
  };
  const signUpWithFaceBook = () => {
    signInWithPopup(auth, faceBookProvider)
    .then(navigate('/blogs'))
      // .then((res) => console.log(res))
      // .catch((err) => console.log(err));
  };
  return (
    <div>
      {/* <div className='absolute top-0  min-h-screen w-1/2 rounded-r-full bg-cyan-100 opacity-30 z-10  '></div> */}
      <div className="border flex flex-col items-center w-1/2 m-auto p-14 rounded-3xl shadow-[5px_5px_15px_-1px_rgba(0,0,0,0.3)] z-50">
        <h1 className="text-cyan-600 font-bold text-2xl pb-14">SIGN UP WITH</h1>
        <div className="flex justify-center items-center pb-20">
          <button
            onClick={signUpWithGoogle}
            className="px-16 py-1 bg-red-700 text-white font-medium text-2xl leading-tight
             rounded-full shadow-md
             ease-in duration-300 hover:bg-red-400 hover:shadow-lg hover:scale-110"
          >
            G
          </button>
          <p className="px-8 text-center text-cyan-600 text-l font-medium">
            OR
          </p>
          <button
            onClick={signUpWithFaceBook}
            className="px-16 py-1 bg-blue-700 text-white font-medium text-2xl leading-tight
             rounded-full shadow-md
             ease-in duration-300 hover:bg-blue-400 hover:shadow-lg hover:scale-110"
          >
            f
          </button>
        </div>
        <div className="flex">
          <p className="text-cyan-400 font-medium pr-1">Already a member?</p>
          <Link className="text-cyan-600 font-medium" to="/signin">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
