import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import BlogCard from '../../../components/Cards/BlogCard';
import Container from '../../../components/UI/Container';
import SearchIcon from '../../../assets/pics/blogpage/searchIcon.svg';
import '../../../style/slick.css';
import '../../../style/slick-theme.css';

function BlogsPage() {
  const [t] = useTranslation();
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
  const fSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: false,
    cssEase: 'linear',
    autoplaySpeed: 2500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 1,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 1,
          dots: true,
        },
      },
    ],
  };
  const sSettings = {
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
  useEffect(() => {
    blogs && setsearchedBlogs(blogs);
  }, [blogs]);
  function handleChangeSort(e) {
    setSortBy(e.target.value);
  }
  function handleSearch(e) {
    if (e.target.value) {
      setsearchedBlogs(
        blogs.filter((el) =>
          el.data.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setsearchedBlogs(blogs);
    }
  }

  return (
    <Container>
      <div className="">
        <div className="flex flex-row max-md:flex-col border-b-2 items-center justify-between pb-5 mb-10 gap-1">
          <div>
            <label className="font-medium text-gray-500 text-lg">
              {t('blogspage.sort')}
              <select
                className="text-base text-center mx-5 bg-cyan-100/50"
                onClick={handleChangeSort}
              >
                <option> {t('blogspage.date')} </option>
                <option> {t('blogspage.popular')} </option>
              </select>
            </label>
          </div>
          <div className="flex items-center">
            <input
              onChange={handleSearch}
              type="search"
              placeholder={t('blogspage.searchholder')}
              className="w-56 px-8 m-1 border-2 rounded-full outline-none  focus:border-indigo-600"
            />
            <img
              src={SearchIcon}
              alt="search-icon"
              className="w-4 h-4 relative right-7"
            />
          </div>
        </div>
        <div>
          <div className="max-w-3xl  m-auto">
            <div className="">
              <Slider {...fSettings}>
                {blogsToDisplay.slice(0, 6).map((blog, i) => (
                  <BlogCard key={i} blog={blog} />
                ))}
              </Slider>
            </div>
          </div>
          <h1 className=" mt-8 mx-6 font-bold text-lg pb-2 text-gray-600">
            Read also:
          </h1>
          <div className="">
            <Slider {...sSettings}>
              {blogsToDisplay.slice(7).map((blog, i) => (
                <BlogCard key={i} blog={blog} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BlogsPage;
