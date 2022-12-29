import React from "react";
import ReactDom from "react-dom";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";




function Login(){
   const [loginEmail, setLoginEmail]=useState("");
   const [loginPassword, setLoginPassword]=useState("");

 const onLogin= async ()=>{
    try {
        const user = await signInWithEmailAndPassword(auth,loginEmail, loginPassword);

        console.log(user)

    } catch (error) {
        console.log(error.message);

    }
    useNavigate("/");
    };
    const handleSubmit = (e) => {
        e.preventDefault();


      };

    return(
         <>
        <h1>Login</h1>
        <form  className="LoginForm" onSubmit={handleSubmit}>
        <input
        placeholder="Email"
        onChange={(e) => setLoginEmail(e.target.value)}
        required
        type="email"
      />
      <input
        placeholder="password"
        onChange={(e) => setLoginPassword(e.target.value)}
        required
        type="password"
      />
      <button  onClick={onLogin} type='button'>Login</button>

      </form>
      </>





    )

    }
    export default Login
