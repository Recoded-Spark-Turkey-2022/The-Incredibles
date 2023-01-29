import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { loadingState } from '../../../features/blogs/blogsSlice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BlogCard from '../../../components/BlogCard';
import Container from '../../../components/UI/Container';
import Spinner from '../../../components/Spinner';
import SearchIcon from '../../../assets/pics/blogpage/searchIcon.svg';
import '../../../style/slick.css';
import '../../../style/slick-theme.css';
import { useTranslation } from 'react-i18next';

function BlogsPage() {
  const [t] = useTranslation();
  const loading = useSelector(loadingState);
  const { blogs } = useSelector((state) => state.blogs);
  const [sortBy, setSortBy] = useState('Date');
  const [searchedBlogs, setsearchedBlogs] = useState(blogs);
  const blogsToDisplay =
    sortBy === 'Date'
      ? [...searchedBlogs].sort((a, b) =>
          b.data.date.localeCompare(a.data.date)
        )
      : [...searchedBlogs].sort((a, b) =>
          b.data.likedUsers.length > a.data.likedUsers.length ? 1 : -1
        );
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          rows: 1,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          rows: 1,
          dots: true,
        },
      },
    ],
  };
  useEffect(() => {
    blogs && setsearchedBlogs(blogs);
  }, [blogs]);
  function handleChangeSort(e) {
    setSortBy(e.target.value);
  }
  function handleSearch(e) {
    if (e.target.value) {
      setsearchedBlogs((current) =>
        current.filter((el) =>
          el.data.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setsearchedBlogs(blogs);
    }
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <Container>
        <div className="">
          <div className="flex ml-6 border-b-2 items-center justify-end max-lg:hidden pb-5 mb-10">
            <label className="font-medium text-gray-500 text-lg">
              {t('blogspage.sort')}
              <select
                className="w-fit  m-1 text-sm bg-cyan-100/50"
                onClick={handleChangeSort}
              >
                <option> {t('blogspage.date')} </option>
                <option> {t('blogspage.popular')} </option>
              </select>
            </label>
            <div className="flex items-center">
              <input
                onChange={handleSearch}
                type="search"
                placeholder={t('blogspage.searchholder')}
                className="pl-4 relative m-1 border-2 rounded-full outline-none  focus:border-indigo-600"
              />
              <img
                src={SearchIcon}
                alt="search-icon"
                className="w-4 h-4 relative right-8"
              />
            </div>
          </div>
          <div>
            {/* <h1 className=" mt-2 mx-6 font-bold text-lg pb-2 text-gray-600">
          Popular:
        </h1> */}
            <div className="max-lg:pr-4 ">
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
      </Container>
      <Footer />
    </>
  );
}

export default BlogsPage;
