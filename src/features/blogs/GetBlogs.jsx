import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogsData, getBlogs } from './blogsSlice';
import User from '../../assets/pics/profilepage/profilepic.svg';
import { selectUser, userData } from '../users/usersSlice';
import { selectBlog } from './blogsSlice';
import { doc } from 'firebase/firestore';

//Gets blog data and puts it inside a card but it need a map or something  CHITURCA still works on it
// shows both blog data and user pic/name
const GetBlogs = ({ path }) => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlog);
  const { user } = useSelector(selectUser);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  console.log()

  return (
    <div name="getbloginfo">
      <br />
      <h1 className='font-bold text-3xl'>Hello</h1>
      {/* {blogs.loading && <h1>Loading...</h1>} */}
      {/* {doc.data().map((blog)=>{
      <div
        onClick={() => navigate(path)}
        className="group h-1/4 border mx-6 max-lg:mx-4 mb-6 rounded-lg shadow-[0_5px_5px_-1px_rgba(0,0,0,0.3)] hover:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)] focus:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)]"
      >
        <div className="transition-all duration-500 w-full bg-gray-200 border overflow-hidden group-hover:py-1">
          <img
            className="m-auto h-60 w-60"
            src={blogs.mediaURL ? blogs.mediaURL : null}
            alt="blog-photo-preview"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-start p-2 mx-2 flex-wrap">
          <h1 className="font-bold">
            {blogs.title ? blogs.title : 'Blog Title'}
          </h1>
          <p className="font-medium overflow-hidden transition-all duration-900 h-6 pb-2 group-hover:h-fit group-hover:overflow-visible">
            {blogs.content ? blogs.content : 'Start to write here'}
          </p>
        </div>
        <div className="flex items-center p-2">
          <img
            src={user.photoURL ? user.photoURL : User}
            alt="author"
            className="w-10"
          />
          <h1 className="ml-4 text-cyan-600 font-medium">
            {user.username ? user.username : 'Name'}{' '}
            {user.usersurname ? user.usersurname : 'Surname'}
          </h1>
        </div>
      </div>
      })} */}
    </div>
  );
};

export default GetBlogs;
