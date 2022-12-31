import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About/AboutPage';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BlogsPage from './pages/Blogs/BlogsPage';
import Blog from './pages/Blogs/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blogs/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
