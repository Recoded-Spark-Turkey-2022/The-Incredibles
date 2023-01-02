import React from 'react';
import BlogCard from './BlogCard';
import BlogImage from '../../assets/pics/blogpage/blogImage.svg';
import ShareIcon from '../../assets/pics/blogpage/share.svg';
import FaceIcon from '../../assets/pics/blogpage/faceb.svg';
import InstaIcon from '../../assets/pics/blogpage/insta.svg';
import TweterIcon from '../../assets/pics/blogpage/tweter.svg';
import User from '../../assets/pics/userProfil.svg';

function Blog() {
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
    <div className="border-t-2 pt-8 flex max-lg:flex-col max-lg:border-t-0">
      <div className="flex flex-col m-auto w-1/2 max-lg:w-full items-center max-sm:p-2 max-lg:border-b-2 ">
        <h1 className="font-bold text-5xl pb-8">
          Title Title tkolsi lsjisdjf{' '}
        </h1>
        <div className=" relative border flex w-fit">
          <img src={BlogImage} alt="blog-image" className="" />
          <div className="w-fit h-fit absolute right-3 bottom-1">
            <img
              src={ShareIcon}
              alt="share-image"
              className="w-8 max-md:w-6 pt-8 max-sm:pt-6 "
            />
            <img
              src={FaceIcon}
              alt="face-image"
              className="w-8 max-md:w-6 pt-8 max-sm:pt-6 "
            />
            <img
              src={InstaIcon}
              alt="insta-image"
              className="w-8 max-md:w-6 pt-8 max-sm:pt-6 "
            />
            <img
              src={TweterIcon}
              alt="tweter-image"
              className="w-8 max-md:w-6 pt-8 max-sm:pt-6 "
            />
          </div>
        </div>
        <div className="flex items-center py-10">
          <p className="pr-2">by:</p>
          <img src={User} alt="author" className="w-10" />
          <h1 className="ml-4 text-cyan-600 font-medium">Ahmad Al-Hariri</h1>
        </div>
        <h1 className="text-blod text-3xl text-center pb-6">
          subTitle subTitle subTitle subTitle subTitle subTitlesubTitlesubTitle
          subTitle subTitle subTitle subTitle subTitlesubTitle
        </h1>
        <p className="text-lg max-lg:px-6 max-lg:pb-6">
          Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor
          sitadad Lorem ipsum ipsum dolor sitadad Lorem ipsum dolor sitadad
          Lorem ipsum dolor sitadad Lorem ipsum dolor Lorem ipsum dolor sitadad
          Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum ipsum
          dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum orem
          ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor
          sitadad Lorem ipsum dolor Lorem ipsum dolor sitadad Lorem ipsum dolor
          sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor
          sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem
          ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum
          dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor
          sitadad Lorem ipsum dolor
        </p>
      </div>
      <div className=" w-1/4 m-auto max-lg:w-full">
        <h1 className=" mt-2 mx-6 font-bold text-lg pb-2 text-gray-600">
          Read also:
        </h1>
        <div className="max-lg:flex">
          {blogs
            .slice(0, 2)
            .map((blog) =>
              blog.state === 'normal' ? <BlogCard key={blog.title} /> : null
            )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
