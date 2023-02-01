import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/users/usersSlice';
import User from '../../../assets/pics/profilepage/profilepic.svg';

//empty card for new signed in user
function MyAccountCard() {
  const { user } = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/myaccount/write')}
      className="flex flex-col w-80 relative ease-in duration-300 hover:scale-90 group h-[400px] border mx-6 max-lg:mx-4 mb-6 overflow-hidden rounded-lg shadow-[0_5px_5px_-1px_rgba(0,0,0,0.3)] hover:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)] focus:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)] hover:cursor-pointer"
    >
      <div className="transition-all duration-500 w-full h-1/4 bg-gray-200 border py-24 overflow-hidden group-hover:py-16"></div>
      <div className="w-60 h-full flex flex-col justify-start p-2 mx-2 flex-wrap">
        <h1 className="font-extrabold text-cyan-600 text-lg p-1">
          Your Blog Title
        </h1>
        <p className="font-medium text-cyan-600 text-lg overflow-hidden transition-all duration-900 h-6 pb-2 group-hover:h-fit group-hover:overflow-visible">
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
            {user.username
              ? user.username + ' ' + user.usersurname
              : user.displayName}{' '}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MyAccountCard;
