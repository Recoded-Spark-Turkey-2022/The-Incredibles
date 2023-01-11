import MyAccountCard from './MyAccountCard';
import Slider from 'react-slick';
import '../../slick.css';
import '../../slick-theme.css';
import UserPhoto from '../../assets/pics/profilepage/myaccount-user.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import { auth } from '../../firebase/firebase';
import GetBlogs from '../../features/blogs/GetBlogs';

//temporary data
const blogs = [
  {
    title: 'title',
    text: 'text',
    author: 'author',
    date: 'date',
    id: 0,
  },
];

function MyAccount() {
  const currentUser = auth.currentUser;
  const { user } = useSelector(selectUser);
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section name="myaccount" className="bg-sky-300 lg:p-20 max-lg:p-5">
      <div className="bg-white rounded-3xl">
        <div className="lg:p-28 lg:pb-10 max-lg:p-3">
          <div
            className="flex flex-col items-center lg:pb-20 max-lg:p-10"
            onClick={() => navigate('/signin/:id/myaccount/myaccountdetails')}
          >
            {/* this part navigates user to MyAccountDetails form which does not have root yet  */}
            <img
              className="lg:w-1/5 m-auto h-40 w-40"
              src={user.photoURL ? user.photoURL : UserPhoto}
            />
            <h2 className="p-5 font-bold text-lg">
              {user.username}
              {user.usersurname}
            </h2>
          </div>
          <div>
            <div className="p-5 max-lg:pr-4">
              <Slider {...settings}>
                {/* {blogs.map((blog) => ( */}
                  <GetBlogs key={blogs.blogID} path="/myaccount/write" />
                   {/* path is not working now, needs to be fixed */}
                {/* ))} */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
