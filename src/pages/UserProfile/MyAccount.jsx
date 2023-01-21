import Slider from 'react-slick';
import '../../slick.css';
import '../../slick-theme.css';
import UserPhoto from '../../assets/pics/profilepage/myaccount-user.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import BlogCard from '../Blogs/BlogCard';
import User from '../../assets/pics/profilepage/profilepic.svg';

function MyAccount() {
  const { blogs } = useSelector((state) => state.blogs);
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
        <div className="lg:p-16 lg:pb-8 max-lg:p-3">
          <div className="flex flex-col items-center lg:pb-5 max-lg:p-10">
            <img
              className="m-auto h-40 w-40 rounded-full"
              onClick={() => navigate('/myaccount/myaccountdetails')}
              src={user.photoURL ? user.photoURL : UserPhoto}
            />
            <h2 className="p-5 font-bold text-lg">
              {user.username} {user.usersurname}
            </h2>
          </div>
          <div>
            <div className="pb-5 max-lg:pr-4">
              <Slider {...settings}>
                {blogs ? (
                  blogs
                    .filter((blog) => blog.data.author.authorId === user.id)
                    .map((blog, i) => {
                      return <BlogCard key={i} blog={blog} />;
                    })
                ) : (
                  <div
                    onClick={() => navigate('/myaccount/write')}
                    className="group h-1/4 border mx-6 max-lg:mx-4 mb-6 rounded-lg shadow-[0_5px_5px_-1px_rgba(0,0,0,0.3)] hover:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)] focus:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)]"
                  >
                    <div className="transition-all duration-500 w-full h-1/4 bg-gray-200 border py-24 overflow-hidden group-hover:py-16"></div>
                    <div className="w-full h-full flex flex-col justify-start p-2 mx-2 flex-wrap">
                      <h1 className="font-extrabold text-lg p-1">
                        Your Blog Title
                      </h1>
                      <p className="font-medium text-lg overflow-hidden transition-all duration-900 h-6 pb-2 group-hover:h-fit group-hover:overflow-visible">
                        Start to write your first blog here!
                      </p>
                      <br />
                      <div className="flex items-center p-2">
                        <img
                          src={user.photoURL ? user.photoURL : User}
                          alt="author"
                          className="w-10 rounded-full"
                        />
                        <h1 className="ml-4 text-cyan-600 font-medium">
                          {user.username ? user.username : 'Name'}{' '}
                          {user.usersurname ? user.usersurname : 'Surname'}
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
