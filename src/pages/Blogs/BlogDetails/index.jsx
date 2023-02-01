import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import Container from '../../../components/UI/Container';
import ReadAlsoCard from '../../../components/Cards/BlogCard';
import BlogImage from '../../../assets/pics/blogpage/blogImage.svg';
import FaceIcon from '../../../assets/pics/blogpage/faceb.svg';
import TweterIcon from '../../../assets/pics/blogpage/tweter.svg';
import LinkedInIcon from '../../../assets/pics/blogpage/linkedin.svg';
import WhatsappIcon from '../../../assets/pics/blogpage/whatsapp.svg';
import User from '../../../assets/pics/profilepage/profilepic.svg';
import Chat from '../../../assets/pics/blogpage/chat.svg';
import { FcLikePlaceholder, FcDislike, FcLike } from 'react-icons/fc';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from '@material-tailwind/react';
import { selectUser } from '../../../features/users/usersSlice';
import {
  addLikes,
  addUnlikes,
  loadingState,
} from '../../../features/blogs/blogsSlice';
import { getChat } from '../../../features/chat/chatSlice';
import { db } from '../../../firebase/firebase';
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from 'react-share';

function BlogDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(loadingState);
  const { blogs } = useSelector((state) => state.blogs);
  const { user } = useSelector(selectUser);
  const location = useLocation();
  const blog = location.state.blog;
  const thisBlog = blogs && blogs.find((el) => el.id === blog.id);
  const blogData = thisBlog && thisBlog.data;
  const [theAuthor, setTheAuthor] = useState(null);
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

  useEffect(() => {
    blogData && handleFindAuthor();
  }, [thisBlog]);

  const handleFindAuthor = async () => {
    const docRef = doc(db, 'users', blogData && blogData.author.authorId);
    const querySnapshot = await getDoc(docRef);
    setTheAuthor(querySnapshot.data());
  };

  const startChat = async () => {
    if (theAuthor) {
      const chatId =
        user.id > theAuthor.id
          ? user.id + theAuthor.id
          : theAuthor.id + user.id;
      const res = await getDoc(doc(db, 'chats', chatId));
      if (!res.exists()) {
        await setDoc(doc(db, 'chats', chatId), { messages: [] });
        const userChat = await getDoc(doc(db, 'userChats', user.id));
        if (userChat.exists()) {
          await updateDoc(doc(db, 'userChats', user.id), {
            [chatId + '.userInfo']: {
              id: theAuthor.id,
              name: theAuthor.username
                ? theAuthor.username
                : theAuthor.displayName,
              photoURL: theAuthor.photoURL
                ? theAuthor.photoURL
                : theAuthor.authPhoto,
            },
            [chatId + '.date']: serverTimestamp(),
          });
        } else {
          await setDoc(doc(db, 'userChats', user.id), {
            [chatId + '.userInfo']: {
              id: theAuthor.id,
              name: theAuthor.username
                ? theAuthor.username
                : theAuthor.displayName,
              photoURL: theAuthor.photoURL
                ? theAuthor.photoURL
                : theAuthor.authPhoto,
            },
            [chatId + '.date']: serverTimestamp(),
          });
        }
        const authorChat = await getDoc(doc(db, 'userChats', theAuthor.id));
        if (authorChat.exists()) {
          await updateDoc(doc(db, 'userChats', theAuthor.id), {
            [chatId + '.userInfo']: {
              id: user.id,
              name: user.username ? user.username : user.displayName,
              photoURL: user.photoURL ? user.photoURL : user.authPhoto,
            },
            [chatId + '.date']: serverTimestamp(),
          });
        } else {
          await setDoc(doc(db, 'userChats', theAuthor.id), {
            [chatId + '.userInfo']: {
              id: user.id,
              name: user.username ? user.username : user.displayName,
              photoURL: user.photoURL ? user.photoURL : user.authPhoto,
            },
            [chatId + '.date']: serverTimestamp(),
          });
        }
        navigate('/chat');
        dispatch(getChat({ data: theAuthor, id: chatId }));
      } else {
        navigate('/chat');
        dispatch(getChat({ data: theAuthor, id: chatId }));
      }
      setTheAuthor(null);
    } else {
      alert('not found');
    }
  };

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <Container>
      <div className="border-t-2 pt-8 flex max-md:flex-col max-md:border-t-0">
        <div
          name="singleblogholder"
          className="flex flex-col  w-2/3 max-md:w-full items-center max-sm:p-2 max-md:border-b-2"
        >
          <div className="">
            <h1 className="font-bold text-5xl pb-8">
              {blog.data.title ? blog.data.title : 'Blog Title'}{' '}
            </h1>

            <div className=" relative border flex">
              <img
                src={blog.data.mediaURL ? blog.data.mediaURL : BlogImage}
                alt="blog-image"
                className="h-96 w-full"
              />
            </div>
            <div className="flex justify-evenly m-5">
              <div>
                <button
                  className={
                    blogData && blogData.likedUsers.includes(user.id)
                      ? 'bg-cyan-600 rounded-full shadow-lg  py-2 px-4 '
                      : 'bg-slate-50 hover:bg-cyan-600/30 hover:shadow-xl hover:scale-110  rounded-full shadow-lg  py-2 px-4 '
                  }
                  onClick={handleLikeClick}
                >
                  <div className="flex items-center">
                    <span className="pr-2">
                      {blogData && blogData.likedUsers.length}
                    </span>
                    {blogData && blogData.likedUsers.includes(user.id) ? (
                      <FcLike />
                    ) : (
                      <FcLike />
                    )}
                  </div>
                </button>
              </div>
              <div>
                <button
                  className={
                    blogData && blogData.unlikedUsers.includes(user.id)
                      ? 'bg-gray-400  py-2 px-4 rounded-full shadow-lg'
                      : ' bg-slate-50 hover:bg-cyan-600/30 hover:shadow-xl hover:scale-110  py-2 px-4 rounded-full shadow-lg'
                  }
                  onClick={handleUnLikeClick}
                >
                  <div className="flex items-center">
                    <span className="pr-2">
                      {' '}
                      {blogData && blogData.unlikedUsers.length}
                    </span>
                    <FcDislike />
                  </div>
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center ">
                <p className="mr-2">by: </p>
                <Popover placement="top">
                  <PopoverHandler className="relative">
                    <div className="">
                      <img
                        src={blogData ? blogData.author.authorPhoto : User}
                        alt="author"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                  </PopoverHandler>
                  <PopoverHandler className="relative">
                    <div>
                      <h1 className="mx-1 text-cyan-600 font-medium">
                        {blogData ? blogData.author.authorName : 'Name'}{' '}
                      </h1>
                    </div>
                  </PopoverHandler>
                  <PopoverContent className="absolute  bg-slate-50">
                    <div className="bg-slate-50">
                      <div className="flex gap-3 items-center">
                        <img
                          src={blogData ? blogData.author.authorPhoto : User}
                          alt="author"
                          className="w-10 h-10 rounded-full"
                        />

                        <p className=" text-cyan-600 font-medium text-center">
                          {thisBlog && thisBlog.data.author.authorName}
                        </p>
                        <button onClick={startChat}>
                          <img className="w-5" src={Chat} alt="send message" />
                        </button>
                      </div>
                      <div className="my-3">
                        <h2 className=" text-cyan-600 font-medium">
                          Biography
                        </h2>

                        <p>
                          {blogData
                            ? blogData.author.authorBio
                            : 'Author Biography'}
                        </p>
                      </div>
                      <div className="my-3">
                        <h2 className=" text-cyan-600 font-medium">Location</h2>

                        <p>
                          {blogData
                            ? blogData.author.authorLocation
                            : 'Author Location'}
                        </p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex justify-end relative translate-y-8 transform-gpu">
                <WhatsappShareButton
                  url={
                    'https://www.whatsapp://send?text=' + window.location.href
                  }
                  quote={'Whatsapp'}
                  hashtag={'#hashtag'}
                  description={'refubook'}
                >
                  <div className="px-3 relative bottom-16 translate-y-2 transform-gpu">
                    <img
                      src={WhatsappIcon}
                      alt="whatsapp-image"
                      className="w-8 max-md:w-6 pt-8 max-sm:pt-6 hover:scale-110"
                    />
                  </div>
                </WhatsappShareButton>
                <FacebookShareButton
                  url={
                    'https://www.facebook.com/sharer/sharer.php?u=' +
                    window.location.href
                  }
                  quote={'Facebook'}
                  hashtag={'#hashtag'}
                  description={'refubook'}
                >
                  <div className="px-3 relative bottom-16 translate-y-2 transform-gpu">
                    <img
                      src={FaceIcon}
                      alt="face-image"
                      className="w-8 max-md:w-6 pt-8 max-sm:pt-6 hover:scale-110"
                    />
                  </div>
                </FacebookShareButton>
                <LinkedinShareButton
                  url={
                    'https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Fdeveloper.linkedin.com' +
                    window.location.href
                  }
                  quote={'Linkedin'}
                  hashtag={'#hashtag'}
                  description={'refubook'}
                >
                  <div className="px-3 relative bottom-16 translate-y-2 transform-gpu">
                    <img
                      src={LinkedInIcon}
                      alt="Linkedin-image"
                      className="w-8 max-md:w-6 pt-8 max-sm:pt-6 hover:scale-110 "
                    />
                  </div>
                </LinkedinShareButton>
                <TwitterShareButton
                  url={
                    'https://twitter.com/intent/tweet?text=' +
                    window.location.href
                  }
                  quote={'Twitter'}
                  hashtags={['hashtag1', 'hashtag2']}
                  description={'refubook'}
                >
                  <div className="px-3 relative bottom-16 translate-y-2 transform-gpu">
                    <img
                      src={TweterIcon}
                      alt="tweter-image"
                      className="w-8 max-md:w-6 pt-8 max-sm:pt-6 hover:scale-110"
                    />
                  </div>
                </TwitterShareButton>
              </div>
            </div>
            <div name="content div" className="">
              <h2 className="text-bold text-3xl text-center py-6">
                {blog.data.subTitle ? blog.data.subTitle : 'Subtitle'}
              </h2>
              <p className="text-lg  max-md:pb-6">
                {blog.data.content ? blog.data.content : 'Content'}
              </p>
            </div>
          </div>
        </div>

        <div className=" w-1/4 m-auto max-md:w-full">
          <h1 className=" mt-2 mx-6 font-bold text-lg pb-2 text-gray-600">
            Read also:
          </h1>
          <div className="max-md:flex flex-col">
            {blogs
              .filter(
                (el) =>
                  el.data.categorey === blog.data.categorey &&
                  el.data.title !== blog.data.title
              )
              .slice(0, 2)
              .map((blog, i) => (
                <ReadAlsoCard key={i} blog={blog} />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BlogDetails;
