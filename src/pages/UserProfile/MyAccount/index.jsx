import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { selectUser } from '../../../features/users/usersSlice';
import MyBlogCard from '../../../components/Cards/MyBlogCard';
import MyAccountCard from '../../../components/Cards/MyAccountCard';
import Container from '../../../components/UI/Container';
import '../../../style/slick.css';
import '../../../style/slick-theme.css';
import User from '../../../assets/pics/profilepage/profilepic.svg';
import ChangePen from '../../../assets/pics/profilepage/changeprofile.svg';
import FeatherPen from '../../../assets/pics/profilepage/pen.svg';

function MyAccount() {
  const { blogs } = useSelector((state) => state.blogs);
  const { user } = useSelector(selectUser);
  const navigate = useNavigate();
  const userBlogs = blogs.filter(
    (blog) => blog.data.author.authorId === user.id
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          rows: 2,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          rows: 5,
          dots: false,
        },
      },
    ],
  };
  return (
    <section name="myaccount" className="bg-[#70CDD6]">
      <Container>
        <div className="bg-white rounded-3xl shadow-lg m-auto my-10">
          <div className="relative flex max-md:flex-col max-md:items-center md:justify-around md:mx-24 lg:mx-72">
            <div className="flex flex-col items-center md:pb-5 max-md:p-10 ease-in duration-300 hover:scale-110">
              <img
                className="m-auto relative top-36 left-16 hover:cursor-pointer "
                onClick={() => navigate('/myaccount/myaccountdetails')}
                src={ChangePen}
              />
              <img
                className="m-auto h-40 w-40 rounded-full hover:cursor-pointer"
                onClick={() => navigate('/myaccount/myaccountdetails')}
                src={
                  user.photoURL
                    ? user.photoURL
                    : user.authPhoto
                    ? user.authPhoto
                    : User
                }
              />
            </div>
            <div className="lg:translate-y-10 md:translate-y-20 text-center">
              <h2 className="p-2 font-bold text-lg text-cyan-600">
                {user.username
                  ? user.username + ' ' + user.usersurname
                  : user.displayName}
              </h2>
              <h2 className="p-2 font-bold text-lg text-cyan-600">
                {user.biography ? user.biography : 'Biography Will Be Here'}
              </h2>
              <h2 className="p-2 font-bold text-lg text-cyan-600">
                {user.location ? user.location : 'Location Will Be Here'}
              </h2>
            </div>
          </div>
          <div className=" m-auto pb-10">
            <div className="">
              {userBlogs[0] ? (
                <div>
                  <div className="m-auto pb-5">
                    <button
                      onClick={() => navigate('/myaccount/write')}
                      className="flex bg-transparent text-cyan-600 leading-tight rounded-full
                  ease-in duration-300 hover:scale-110 hover:cursor-pointer m-auto"
                    >
                      <h1 className="text-xl font-bold font-mono italic">
                        Create A New Blog{' '}
                      </h1>
                      <img src={FeatherPen} className="w-10" />
                    </button>
                  </div>
                  <Slider {...settings}>
                    {blogs
                      .filter((blog) => blog.data.author.authorId === user.id)
                      .map((blog, i) => {
                        return <MyBlogCard key={i} blog={blog} />;
                      })}
                  </Slider>
                </div>
              ) : (
                <div className='flex justify-center mt-10'>
                <MyAccountCard />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MyAccount;
