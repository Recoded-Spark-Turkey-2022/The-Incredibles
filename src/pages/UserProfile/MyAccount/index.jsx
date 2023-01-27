import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/users/usersSlice';
import BlogCard from '../../../components/BlogCard';
import MyAccountCard from '../../../components/MyAccountCard';
import Slider from 'react-slick';
import '../../../style/slick.css';
import '../../../style/slick-theme.css';
import User from '../../../assets/pics/profilepage/profilepic.svg';
import ChangePen from '../../../assets/pics/profilepage/changeprofile.svg';
import Container from '../../../components/UI/Container';
function MyAccount() {
  const { blogs } = useSelector((state) => state.blogs);
  const { user } = useSelector(selectUser);
  const navigate = useNavigate();
  const userBlogs = blogs.filter(
    (blog) => blog.data.author.authorId === user.id
  );
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
    <section name="myaccount" className="bg-cyan-600 ">
     <Container>
      <div className="bg-white rounded-3xl shadow-lg md:w-9/12 m-auto my-10">
        <div className="lg:p-16 lg:pb-8 max-lg:p-3">
          <div className="flex flex-col items-center lg:pb-5 max-lg:p-10">
            <img
              className="m-auto relative top-36 left-16"
              onClick={() => navigate('/myaccount/myaccountdetails')}
              src={ChangePen}
            />
            <img
              className="m-auto h-40 w-40 rounded-full"
              onClick={() => navigate('/myaccount/myaccountdetails')}
              src={
                user.photoURL
                  ? user.photoURL
                  : user.authPhoto
                  ? user.authPhoto
                  : User
              }
            />
            <h2 className="p-5 font-bold text-lg text-cyan-600">
              {user.username + ' ' + user.usersurname ||
                user.displayName ||
                'User Name'}
            </h2>
          </div>
          <div>
            <div className="">
              <Slider {...settings}>
                {userBlogs[0] ? (
                  blogs
                    .filter((blog) => blog.data.author.authorId === user.id)
                    .map((blog, i) => {
                      return <BlogCard key={i} blog={blog} />;
                    })
                ) : (
                  <MyAccountCard />
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}

export default MyAccount;
