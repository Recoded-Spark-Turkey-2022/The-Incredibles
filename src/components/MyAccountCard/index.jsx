import User from '../../assets/pics/profilepage/profilepic.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';

function MyAccountCard() {
  const { user } = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/myaccount/write')}
      className="flex gap-5 m-auto justify-center my-5 hover:cursor-pointer "
    >
      <div className="transition-all duration-500 w-full h-1/4 bg-gray-200 border py-24 overflow-hidden group-hover:py-16"></div>
      <div className="w-60 h-full flex flex-col justify-start p-2 mx-2 flex-wrap">
        <h1 className="font-extrabold text-lg p-1">Your Blog Title</h1>
        <p className="font-medium text-lg overflow-hidden transition-all duration-900 h-6 pb-2 group-hover:h-fit group-hover:overflow-visible">
          Start to write your first blog here!
        </p>
        <br />
        <div className="flex items-center p-2">
          <img
            src={
              user.photoURL
                ? user.photoURL
                : user.authPhoto
                ? user.authPhoto
                : User
            }
            alt="author"
            className="w-10 rounded-full"
          />
          <h1 className="ml-4 text-cyan-600 font-medium">
            {user.username ? user.username : user.displayName}{' '}
            {user.usersurname ? user.usersurname : ''}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MyAccountCard;
