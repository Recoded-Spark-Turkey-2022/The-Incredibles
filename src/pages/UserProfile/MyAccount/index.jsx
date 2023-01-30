import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { selectUser } from '../../../features/users/usersSlice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BlogCard from '../../../components/BlogCard';
import MyAccountCard from '../../../components/MyAccountCard';
import Container from '../../../components/UI/Container';
import '../../../style/slick.css';
import '../../../style/slick-theme.css';
import User from '../../../assets/pics/profilepage/profilepic.svg';
import ChangePen from '../../../assets/pics/profilepage/changeprofile.svg';

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
          infinite: true,
          rows: 2,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 5,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Navbar />
      <section name="myaccount" className="bg-[#70CDD6]">
        <Container>
          <div className="bg-white rounded-3xl shadow-lg m-auto my-10">
            <div className="relative pb-8">
              <div className="flex flex-col items-center md:pb-5 max-md:p-10">
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
                <h2 className="p-5 font-bold text-lg text-cyan-600">
                  {user.username
                    ? user.username + ' ' + user.usersurname
                    : user.displayName}
                </h2>
              </div>
            </div>
            <div className=" m-auto pb-10">
              <MyAccountCard />
              <div className="">
                {userBlogs[0] ? (
                  <Slider {...settings}>
                    {blogs
                      .filter((blog) => blog.data.author.authorId === user.id)
                      .map((blog, i) => {
                        return <BlogCard key={i} blog={blog} />;
                      })}
                  </Slider>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default MyAccount;
