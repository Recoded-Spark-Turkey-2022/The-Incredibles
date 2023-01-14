import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import Footer from './components/Footer';
import HomePage from './pages/Home/HomePage';
import Navbar from './components/Navbar';
import BlogsPage from './pages/Blogs/BlogsPage';
import Blog from './pages/Blogs/Blog';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signup/Signin';
import MyAccount from './pages/UserProfile/MyAccount';
import MyAccountDetails from './pages/UserProfile/MyAccountDetails';
import WriteBlog from './pages/UserProfile/WriteBlog';
import UserDetails from './pages/UserProfile/UserDetails';
import { auth } from './firebase/firebase';
import { getUser } from './features/users/usersSlice';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { getBlogs } from './features/blogs/blogsSlice';

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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs/blog" element={<Blog />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route
          path="/signin/:id/myaccount/myaccountdetails"
          element={<MyAccountDetails />}
        />
        <Route path="/myaccount/write" element={<WriteBlog />} />
        <Route path="/:id/userdetails" element={<UserDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
