import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About/AboutPage';
import Contact from './pages/Contact/ContactPage';
import Footer from './components/Footer';
import Home from './pages/Home/HomePage';
import Navbar from './components/Navbar';
import BlogsPage from './pages/Blogs/BlogsPage';
import Blog from './pages/Blogs/Blog';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signup/Signin';
import MyAccount from './pages/UserProfile/MyAccount';
import MyAccountDetails from './pages/UserProfile/MyAccountDetails';
import WriteBlog from './pages/UserProfile/WriteBlog';
import UserDetails from './pages/UserProfile/UserDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/blog" element={<Blog />} />
        <Route path="/signin/:id/myaccount" element={<MyAccount />} />
        <Route
          path="/signin/:id/myaccount/myaccountdetails"
          element={<MyAccountDetails />}
        />
        <Route path="/signin/:id/write" element={<WriteBlog />} />
        <Route path="/:id/userdetails" element={<UserDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
