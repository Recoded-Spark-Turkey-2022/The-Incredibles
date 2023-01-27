import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { creatUser } from '../../../features/users/usersSlice';
import { googleProvider, faceBookProvider } from '../../../firebase/firebase';
import Container from '../../../components/UI/Container';
import googleIcon from '../../../assets/pics/signuppage/google.png';
import facebookIcon from '../../../assets/pics/signuppage/facebook.png';

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
    <Container>
    <div>
    <div className="border flex flex-col items-center md:w-1/2 m-auto p-14 rounded-3xl shadow-[5px_5px_15px_-1px_rgba(0,0,0,0.3)] z-50">
          <h1 className="text-cyan-600 font-bold text-2xl pb-14">
            SIGN IN WITH
            </h1>
        <div className="flex justify-center items-center pb-20">
        <button
              onClick={handleGLogin}
              className="py-1 ease-in duration-300  hover:scale-110"
            >
              <img src={googleIcon} className="w-[50px]" />
            </button>
          <p className="px-8 text-center text-cyan-600 text-l font-medium">
            OR
          </p>
         <button
              onClick={handleFLogin}
              className="py-1 ease-in duration-300  hover:scale-110"
            >
              <img src={facebookIcon} className="w-[50px]" />
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
    </Container>
  );
}

export default SignIn;
