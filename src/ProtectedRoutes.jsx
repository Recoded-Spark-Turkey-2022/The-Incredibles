import React from 'react';
import { Navigate, Outlet,  } from 'react-router-dom';




function ProtectedRoutes() {
  return localStorage.getItem('loggedIn') ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
}

export default ProtectedRoutes;
