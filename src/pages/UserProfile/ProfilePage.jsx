import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../components/Home';
import UserNavbar from './UserNavbar';
import MyAccount from './MyAccount';
import WriteBlog from './WriteBlog';
import UserDetails from './UserDetails';
import MyAccountDetails from './MyAccountDetails';

//Here will be used as a container for user datails.
// These routes should be connected with login (signin) page, when it's pages come, they will be modified to App
// I changed the route structure here to explain what I mean better. After NavBars will be combined these routes will be carried to App alltogether

function ProfilePage() {
  return (
    <div name="profilepage">
      <UserNavbar />
      <Routes>
        <Route path="/signin/:id/myaccount" element={<MyAccount />} />
        <Route path="/signin/:id/myaccount/myaccountdetails" element={<MyAccountDetails/>} />
        <Route path="/signin/:id/write" element={<WriteBlog />} />
        <Route path="/:id/userdetails" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default ProfilePage;
