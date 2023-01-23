import React,{useState,useEffect} from 'react';
import SearchIcon from '../../../assets/pics/blogpage/searchIcon.svg';
import BlogCard from '../../../components/BlogCard';
import Slider from 'react-slick';
import '../../../style/slick.css';
import '../../../style/slick-theme.css';
import { useSelector } from 'react-redux';

function BlogsPage() {
  const { blogs } = useSelector((state) => state.blogs);
  const [sortBy, setSortBy] = useState('Date')
  const [searchedBlogs,setsearchedBlogs] = useState(blogs)
  console.log(searchedBlogs)
  const blogsToDisplay = sortBy === 'Date' ?
   [...searchedBlogs].sort((a,b)=>b.data.date.localeCompare(a.data.date)):
   [...searchedBlogs].sort((a,b)=>b.data.likedUsers.length > a.data.likedUsers.length ? 1 : -1 )
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows:2,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          rows:1,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          rows:1,
          dots: true,
        },
      },
    ],
  };
  useEffect(()=>{
    blogs && setsearchedBlogs(blogs)
  },[blogs])
  function handleChangeSort(e){
    setSortBy(e.target.value)
  }
  function handleSearch(e){
    if(e.target.value){
      setsearchedBlogs((current)=>current.filter(el=>el.data.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    else{setsearchedBlogs(blogs)}
  }

  return (
    <div className="px-28 max-lg:px-4">
      <div className="flex ml-6 border-b-2 items-center justify-end max-lg:hidden ">
        <label className="font-medium text-gray-500 text-lg">
          sort by:
          <select className="w-fit  m-1 text-sm bg-cyan-100" onClick={handleChangeSort} >
            <option> Date </option>
            <option> Popular </option>
          </select>
        </label>
        <div className="flex items-center">
          <input
            onChange={handleSearch}
            type="search"
            placeholder="Search..."
            className="pl-4 relative m-1 border-2 rounded-full outline-none  focus:border-indigo-600"
          />
          <img
            src={SearchIcon}
            alt="search-icon"
            className='className=" w-4 h-4 absolute right-36 text-cyan-600 "'
          />
        </div>
      </div>
      <div>
        {/* <h1 className=" mt-2 mx-6 font-bold text-lg pb-2 text-gray-600">
          Popular:
        </h1> */}
        <div className="max-lg:pr-4">
          <Slider {...settings}>
            {blogsToDisplay.map((blog, i) => (
              <BlogCard key={i} blog={blog} />
            ))}
          </Slider>
        </div>
        {/* <h1 className=" mt-2 mx-6 font-bold text-lg pb-2 text-gray-600">
          Read also:
        </h1>
        <div className="max-lg:pr-4">
          <Slider {...settings}>
            {blogs.map((blog, i) => (
              <BlogCard key={i} blog={blog} />
            ))}
          </Slider>
        </div> */}
      </div>
    </div>
  );
}

export default BlogsPage;
