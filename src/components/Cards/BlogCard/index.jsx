import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../features/users/usersSlice';
import { parseISO, formatDistanceToNow } from 'date-fns';
import NoMedia from '../../../assets/pics/blogpage/nomedia.svg';

//big blog card does not contain delete function
function BlogCard({ blog }) {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  const { user } = useSelector(selectUser);
  const thisBlog = blogs && blogs.find((el) => el.id === blog.id);
  let timeAgo = '';
  if (blog.data.date) {
    const date = parseISO(blog.data.date);
    const time = formatDistanceToNow(date);
    timeAgo = `created ${time} ago`;
  }
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate('/blogs/blog', { state: { blog: blog } });
  };

  return (
    <div
      name="card"
      className="relative ease-in duration-300 hover:scale-90 group h-[400px] border mx-6 max-lg:mx-4 mb-6 overflow-hidden rounded-lg shadow-[0_5px_5px_-1px_rgba(0,0,0,0.3)] hover:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)] focus:shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.3)]"
    >
      <div name="contentholder" className="h-2/3">
        <div name="media" className="h-5/6">
          <img
            onClick={handleClick}
            className="m-auto w-full h-full"
            src={blog.data.mediaURL ? blog.data.mediaURL : NoMedia}
            alt="blog-photo-preview"
          />
        </div>
        <div name="blogbrief" className="px-5 pt-2">
          <div onClick={handleClick} className="font-medium">
            <h1 className="font-bold overflow-hidden transition-all duration-900 h-6 pb-5">
              {blog.data.title}
            </h1>
            <p className="font-medium overflow-hidden transition-all duration-900 h-6 pb-5">
              {blog.data.subTitle}
            </p>
            <span>...</span>
          </div>
        </div>
      </div>

      <div
        name="author"
        className=" m-auto px-3 translate-y-6 transform-gpu h-1/3"
      >
        <p className="text-sm">{timeAgo}</p>
        <p className="text-cyan-600 text-sm">
          {thisBlog && thisBlog.data.likedUsers.length} likes
        </p>
        <div name="authordetails" className="flex justify-start pt-2">
          <img
            src={thisBlog && thisBlog.data.author.authorPhoto}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="ml-4 text-cyan-600 font-bold translate-y-2 transform-gpu">
            {thisBlog && thisBlog.data.author.authorName}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
