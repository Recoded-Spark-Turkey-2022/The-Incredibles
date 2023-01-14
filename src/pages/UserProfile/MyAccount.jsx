import MyAccountCard from './MyAccountCard';
import Slider from 'react-slick';
import '../../slick.css';
import '../../slick-theme.css';
import UserPhoto from '../../assets/pics/profilepage/myaccount-user.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';

function MyAccount() {
  const { blogs } = useSelector((state) => state.blogs);
  const { user } = useSelector(selectUser);
  // const {blogs} = useSelector(selectBlog)
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
              className="m-auto h-40 w-40 rounded-full"
              src={user.photoURL ? user.photoURL : UserPhoto}
            />
            <h2 className="p-5 font-bold text-lg">
              {user.username}
              {user.usersurname}
            </h2>
          </div>
          <div>
            <div className="p-5 max-lg:pr-4">
              {/* CHITURCA will change this part workon progress */}
              <Slider {...settings}>
                {blogs
                  .filter((blog) => blog.userID === user.id)
                  .map((blog, i) => {
                    return <MyAccountCard key={i} data={blog} />;
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
