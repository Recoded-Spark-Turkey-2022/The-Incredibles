import React, { useState } from 'react';
import SearchIcon from '../../assets/pics/blogpage/searchIcon.svg';
import BlogCard from './BlogCard';
import Slider from 'react-slick';
import '../../slick.css';
import '../../slick-theme.css';

function BlogsPage() {
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
          slidesToShow:2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
    ]
    
  };
  //temporary data
  const blogs = [
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      state: 'normal',
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      state: 'normal',
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      state: 'normal',
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      state: 'normal',
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      state: 'normal',
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      state: 'normal',
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      state: 'popular',
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      state: 'popular',
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      state: 'popular',
    },
    {
      title: 'title',
      text: 'text',
      author: 'author',
      date: 'date',
      state: 'popular',
    },
  ];

  return (
    <div className="px-28 max-lg:px-4">
      <div className="flex ml-6 border-b-2 items-center justify-end max-lg:hidden ">
        <label className="font-medium text-gray-500 text-lg">
          sort by:
          <select className="w-fit  m-1 text-sm bg-cyan-100">
            <option> Date </option>
            <option> Popular </option>
            <option> other thing </option>
          </select>
        </label>
        <div className="flex items-center">
          <input
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
        <h1 className=" mt-2 mx-6 font-bold text-lg pb-2 text-gray-600">Popular:</h1>
        <div className='max-lg:pr-4' >
          <Slider {...settings}>
            {blogs.map((blog) =>
              blog.state === 'popular' ? <BlogCard key={blog.title} /> : null
            )}
          </Slider>
        </div>
        <h1 className=" mt-2 mx-6 font-bold text-lg pb-2 text-gray-600">Read also:</h1>
        <div className='max-lg:pr-4' >
          <Slider {...settings}>
            {blogs.map((blog) =>
              blog.state === 'normal' ? <BlogCard key={blog.title} /> : null
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
