import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getUser } from './features/users/usersSlice';
import { getBlogs } from './features/blogs/blogsSlice';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogsPage from './pages/Blogs/BlogsPage';
import BlogDetails from './pages/Blogs/BlogDetails';
import SignUp from './pages/Signup/SignUp';
import SignIn from './pages/Signup/SingIn';
import MyAccount from './pages/UserProfile/MyAccount';
import MyAccountDetails from './pages/UserProfile/MyAccountDetails';
import WriteBlog from './pages/UserProfile/WriteBlog';
import ChatsPage from './pages/ChatsPage';
import NotFoundPage from './pages/NotFoundPage/error';

function App() {
  // const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.uid));
      }
    });
  }, [onAuthStateChanged]);

  return (
    <div className="App">
      <Routes>
        {/* public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/blog" element={<BlogDetails />} />
        {/* protected */}
        <Route path="/chat" element={<ChatsPage />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route
          path="/myaccount/myaccountdetails"
          element={<MyAccountDetails />}
        />
        <Route path="/myaccount/write" element={<WriteBlog />} />
        {/* catch all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
