import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../../components/Home";
import UserNavbar from "./UserNavbar";
import MyAccount from "./MyAccount";
import WriteBlog from "./WriteBlog";
import UserDetails from "./UserDetails";

//Here will be used as a container for user datails. 
// These routes should be connected with login page, when it pages come, they will be modified
//Profile Page is not connected to anywhere right now we need to ask about that first

function ProfilePage() {
    return (
        <div name="profilepage">
          <UserNavbar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/write" element={<WriteBlog />} />
            <Route path="/userdetails" element={<UserDetails />} />
          </Routes>
        </div>
      );
}

export default ProfilePage;