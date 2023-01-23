import React from 'react';
import BlogCard from '../../../components/BlogCard';
import BlogImage from '../../../assets/pics/blogpage/blogImage.svg';
import ShareIcon from '../../../assets/pics/blogpage/share.svg';
import FaceIcon from '../../../assets/pics/blogpage/faceb.svg';
import InstaIcon from '../../../assets/pics/blogpage/insta.svg';
import TweterIcon from '../../../assets/pics/blogpage/tweter.svg';
import User from '../../../assets/pics/profilepage/profilepic.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../features/users/usersSlice';
import { useLocation } from 'react-router';
import { addLikes, addUnlikes } from '../../../features/blogs/blogsSlice';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from '@material-tailwind/react';

function BlogDetails() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  const { user } = useSelector(selectUser);
  const location = useLocation();
  const blog = location.state.blog;
  const thisBlog = blogs && blogs.find((el) => el.id === blog.id);
  const blogData = thisBlog && thisBlog.data;
  const handleLikeClick = async () => {
    await dispatch(
      addLikes({
        id: blog.id,
        state: blogData && blogData.likedUsers.includes(user.id),
      })
    );
  };
  const handleUnLikeClick = async () => {
    await dispatch(
      addUnlikes({
        id: blog.id,
        state: blogData && blogData.unlikedUsers.includes(user.id),
      })
    );
  };
  return (
    <div className="border-t-2 pt-8 flex max-lg:flex-col max-lg:border-t-0">
      <div
        name="singleblogholder"
        className="flex flex-col m-auto w-1/2 max-lg:w-full items-center max-sm:p-2 max-lg:border-b-2"
      >
        <div className="">
          <h1 className="font-bold text-5xl pb-8">
            {blog.data.title ? blog.data.title : 'Blog Title'}{' '}
          </h1>
          <div className=" relative border flex">
            <img
              src={blog.data.mediaURL ? blog.data.mediaURL : BlogImage}
              alt="blog-image"
              className="h-96"
            />
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
          <div className="flex justify-between">
            <div>
              <span> {blogData && blogData.likedUsers.length} likes</span>
              <button
                className={
                  blogData && blogData.likedUsers.includes(user.id)
                    ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    : 'bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                }
                onClick={handleLikeClick}
              >
                <span className="likes-counter button">{`${
                  blogData && blogData.likedUsers.includes(user.id)
                    ? 'liked'
                    : 'Like'
                }`}</span>
              </button>
            </div>
            <div>
              <span> {blogData && blogData.unlikedUsers.length} dislike </span>
              <button
                className={
                  blogData && blogData.unlikedUsers.includes(user.id)
                    ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    : 'bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                }
                onClick={handleUnLikeClick}
              >
                <span className="likes-counter button">{`${
                  blogData && blogData.unlikedUsers.includes(user.id)
                    ? 'disliked'
                    : 'dislike'
                }`}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center py-10">
            <p className="pr-2">by:</p>
            <Popover placement="right">
              <PopoverHandler className="relative">
                <div>
                  <img
                    src={blogData ? blogData.author.authorPhoto : User}
                    alt="author"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </PopoverHandler>
              <PopoverContent className="absolute">
                <div className="p-5">
                  <img
                    src={blogData ? blogData.author.authorPhoto : User}
                    alt="author"
                    className="w-10 h-10 rounded-full"
                  />
                  <br />
                  <h2 className="ml-4 text-cyan-600 font-medium text-center">
                    {thisBlog && thisBlog.data.author.authorName}
                  </h2>
                  <br />
                  <h2 className="ml-4 text-cyan-600 font-medium">Biography</h2>

                  <p>
                    {blogData ? blogData.author.authorBio : 'Author Biography'}
                  </p>
                  <br />
                  <h2 className="ml-4 text-cyan-600 font-medium">Location</h2>

                  <p>
                    {blogData
                      ? blogData.author.authorLocation
                      : 'Author Location'}
                  </p>
                </div>
              </PopoverContent>
            </Popover>
            <Popover placement="right">
              <PopoverHandler className="relative">
                <div>
                  <h1 className="ml-4 text-cyan-600 font-medium">
                    {blogData ? blogData.author.authorName : 'Name'}{' '}
                  </h1>
                </div>
              </PopoverHandler>
              <PopoverContent className="absolute">
                <div className="p-5">
                  <img
                    src={blogData ? blogData.author.authorPhoto : User}
                    alt="author"
                    className="w-10 h-10 rounded-full"
                  />
                  <br />
                  <h2 className="ml-4 text-cyan-600 font-medium text-center">
                    {thisBlog && thisBlog.data.author.authorName}
                  </h2>
                  <br />
                  <h2 className="ml-4 text-cyan-600 font-medium">Biography</h2>

                  <p>
                    {blogData ? blogData.author.authorBio : 'Author Biography'}
                  </p>
                  <br />
                  <h2 className="ml-4 text-cyan-600 font-medium">Location</h2>

                  <p>
                    {blogData
                      ? blogData.author.authorLocation
                      : 'Author Location'}
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div name="content div" className="">
            <h2 className="text-blod text-3xl text-center pb-6">
              {blog.data.subTitle ? blog.data.subTitle : 'Subtitle'}
            </h2>
            <p className="text-lg max-lg:px-6 max-lg:pb-6">
              {blog.data.content ? blog.data.content : 'Content'}
            </p>
          </div>
        </div>
      </div>

      <div className=" w-1/4 m-auto max-lg:w-full">
        <h1 className=" mt-2 mx-6 font-bold text-lg pb-2 text-gray-600">
          Read also:
        </h1>
        <div className="max-lg:flex">
          {blogs
            .filter(
              (el) =>
                el.data.categorey === blog.data.categorey &&
                el.data.title !== blog.data.title
            )
            .slice(0, 2)
            .map((blog, i) => (
              <BlogCard key={i} blog={blog} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
