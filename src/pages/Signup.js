import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { auth, db } from "../firebase/firebase-config"


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function onRegister() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        set(ref(db, 'users/', userCredential.user.id), {
          firstName,
          lastName,
          email
        });
      })
      // .catch((error) => console.log("error:", error));
     navigate("/");
  }
  const handleSubmit = (e) => {
    e.preventDefault();


  };

  return (
    <div>
      <form className=" md:container md:mx-auto" onSubmit={handleSubmit}>
        <input
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        />
        <button  onClick={onRegister} type='button'>Sign Up</button>
        {auth.currentUser.email}
      </form>
    </div>
  );
};

export default SignUp;