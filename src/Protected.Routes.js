
// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';
// import { selectUser ,selectUserLoggedIn} from './features/users/usersSlice';


// function ProtectedRouts() {
//   const [user] = useAuthState(auth);
//   const {auth}= useSelector(selectUser)
//     console.log(auth);
//     return auth ? <Outlet /> : <Navigate to="/signIn" />;
//   };

// export default ProtectedRouts;






















// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Outlet, Navigate, Routes } from 'react-router-dom';
// import { selectUser } from './features/users/usersSlice';
// import { auth } from './firebase/firebase';
// import MyAccount from './pages/UserProfile/MyAccount';
// import NotFoundPage from './pages/NotFoundPage/error';
// import { useState , useEffect } from 'react';


//   function ProtectedRouts() {
//   // const {user}=useSelector(selectUser)
//   // console.log(user);
//   // let user ={"token":false}
//   // return (
//   // user.token ? <Outlet/> : <Navigate to="/SignIn"/>
//   // );


//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//     const [isChecking, setIsChecking] = useState(true)
//     let user ={"token":Boolean}


//     const isAuth = async () => {
//         await user.get(`/users/${uuid}`).then((res) => {
//             console.log(res)
//             if (res.status === 200) setIsLoggedIn(true)
//             setIsChecking(false);
//             return;
//         })
//     }

//     useEffect(() => {
//         isAuth()
//     }, [isLoggedIn])

//     // if(isChecking) return <p>Checking....</p>

//     return isLoggedIn ? <Outlet /> : <Navigate to={'/SignIn'} />
// }

// export default ProtectedRouts;



