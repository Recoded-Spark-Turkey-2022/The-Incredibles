import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { creatUser } from '../../../features/users/usersSlice';
import { googleProvider, faceBookProvider } from '../../../firebase/firebase';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { GoogleLoginButton } from 'react-social-login-buttons';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGLogin = async () => {
    await dispatch(creatUser(googleProvider));
    await new Promise((resolve) => setTimeout(resolve, 1000)).then(
      navigate('/blogs')
    );
  };

  const handleFLogin = async () => {
    await dispatch(creatUser(faceBookProvider));
    await new Promise((resolve) => setTimeout(resolve, 1000)).then(
      navigate('/blogs')
    );
  };

  return (
    <div>
      {/* <div className='absolute top-0  min-h-screen w-1/2 rounded-r-full bg-cyan-100 opacity-30 z-10  '></div> */}
      <div className="border flex flex-col items-center w-1/2 m-auto p-14 rounded-3xl shadow-[5px_5px_15px_-1px_rgba(0,0,0,0.3)] z-50">
        <h1 className="text-cyan-600 font-bold text-2xl pb-14">SIGN IN WITH</h1>
        <div className="flex justify-center items-center pb-20">
          <button
            className="text-white font-medium text-2xl
            ease-in duration-300  hover:scale-110 py-4 drop-shadow-xl hover:drop-shadow-xl w-70 h-24"
            onClick={handleGLogin}
          >
            <GoogleLoginButton />
          </button>
          <p className="px-8 text-center text-cyan-600 text-l font-medium">
            OR
          </p>
          <button
            onClick={handleFLogin}
            className="text-white font-medium text-2xl
            ease-in duration-300 drop-shadow-xl  hover:scale-110"
          >
            <FacebookLoginButton />
          </button>
        </div>
        <div className="flex">
          <p className="text-cyan-400 font-medium pr-1">Want to be a member?</p>
          <Link className="text-cyan-600 font-medium" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
