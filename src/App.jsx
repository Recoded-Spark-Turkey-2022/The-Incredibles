import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Routes, Route, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth  } from './firebase/firebase';
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
import ProtectedRouts from './Protected.Routes';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
   const [user] = useAuthState(auth);
  // const [user, setUser] = React.useState(null);
  // const [isSignedIn, setIsSignedIn] = useState(null)
  // const SignIn = () => {
  //   setIsSignedIn(true)
  // }
  // const signOut = () => {
  //   setIsSignedIn(false)
  // }
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
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        {/* Protected Routes */}
        {user?<Route path="/chat" element={<ChatsPage />}/>:<Route path="/signin" element={<SignIn />}/>}
        {user?<Route path="/blogs/blog" element={<BlogDetails />} />:<Route path="/signin" element={<SignIn />}/>}
        {user?<Route path="/myaccount/write" element={<WriteBlog />} />:<Route path="/signin" element={<SignIn />}/>}
        {user?<Route path="/myaccount" element={<MyAccount/>}/>:<Route path="/signin" element={<SignIn />}/>}
        <Route path="*" element={<NotFoundPage />}  />
      </Routes>

    </div>
  );
}

export default App;
