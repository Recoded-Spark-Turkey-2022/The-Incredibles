import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  creatGoogleUser,
  creatFacebookUser,
} from '../../features/users/usersSlice';

function Signup() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="border flex flex-col items-center w-1/2 m-auto p-14 rounded-3xl shadow-[5px_5px_15px_-1px_rgba(0,0,0,0.3)] z-50">
        <h1 className="text-cyan-600 font-bold text-2xl pb-14">SIGN UP WITH</h1>
        <div className="flex justify-center items-center pb-20">
          <button
            onClick={() => dispatch(creatGoogleUser())}
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
            onClick={() => dispatch(creatFacebookUser())}
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
