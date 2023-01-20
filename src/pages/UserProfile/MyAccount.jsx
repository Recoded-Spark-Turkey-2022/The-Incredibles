import MyAccountCard from './MyAccountCard';
import Slider from 'react-slick';
import '../../slick.css';
import '../../slick-theme.css';
import UserPhoto from '../../assets/pics/profilepage/myaccount-user.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';

const emptyCard = [
  // {
  //   title: 'Your Blog Title',
  //   content: 'Start to write here',
  //   date: 'date',
  //   id: 0,
  // }
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
]

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
          <div
            className="flex flex-col items-center lg:pb-5 max-lg:p-10"
          >
            <img
              className="m-auto h-40 w-40 rounded-full"
              onClick={() => navigate('/myaccount/myaccountdetails')}
              src={user.photoURL ? user.photoURL : UserPhoto}
            />
            <h2 className="p-5 font-bold text-lg">
              {user.username}{' '}
              {user.usersurname}
            </h2>
          </div>
          <div>
            <div className="pb-5 max-lg:pr-4">
              <Slider {...settings}>
                { blogs?
                blogs
                  .filter((blog) => blog.data.userID === user.id)
                  .map((blog, i) => {
                    return <MyAccountCard key={i} data={blog.data} />;
                  }) :
                emptyCard.map((holder) =>(<MyAccountCard key={holder.id}/>))
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
