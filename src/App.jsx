import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About/AboutPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BlogsPage from './pages/Blogs/BlogsPage';
import Blog from './pages/Blogs/Blog';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signup/Signin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
