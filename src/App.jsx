import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About/AboutPage';
import Blog from './components/Blog';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import Login from './pages/Login';
import Signup from './pages/Signup';
// import { AuthProvider } from "./AuthProvider";




function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* { <Route exact path="/login" element={<Login />} /> */}
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
