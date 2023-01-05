import MyAccountCard from "./MyAccountCard";
import Slider from 'react-slick';
import '../../slick.css';
import '../../slick-theme.css';
import UserPhoto from "../../assets/pics/profilepage/myaccount-user.svg";
import BG from "../../assets/pics/profilepage/profilebg.svg";
import PhoneBG from "../../assets/pics/profilepage/phonebg.svg";
import { useNavigate } from 'react-router-dom';

  //temporary data
  const blogs = [
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      id: 0,
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      id: 1,
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      id: 2,
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      id: 3,
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      id: 4,
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      id: 5,
    },
  ];


function MyAccount() {
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
          <div className="flex flex-col items-center lg:pb-20 max-lg:p-10" onClick={() => navigate('/signin/:id/myaccount/myaccountdetails')}>
            {/* this part navigates user to MyAccountDetails form which does not have root yet  */}
            <img className="lg:w-1/5 m-auto" src={UserPhoto} />
            <h2 className="p-5 font-bold text-lg">User Name</h2>
          </div>
          <div>
            <div className="p-5 max-lg:pr-4">
              <Slider {...settings}>
                {blogs.map((blog) => <MyAccountCard key={blog.id} /> )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAccount;

