import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../../components/Home";
import UserNavbar from "./UserNavbar";
import MyAccount from "./MyAccount";
import WriteBlog from "./WriteBlog";
import UserDetails from "./UserDetails";

//Here will be used as a container for user datails

function ProfilePage() {
    return (
        <div name="profilepage">
          <UserNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/write" element={<WriteBlog />} />
            <Route path="/userdetails" element={<UserDetails />} />
          </Routes>
        </div>
      );
}

export default ProfilePage;