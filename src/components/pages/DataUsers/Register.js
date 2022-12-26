import React from "react";
// import { signInWithGoogle } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { signInWithGoogle } from "../../../firebase";
import { auth } from "../../../firebase";
import products from "../../../store/products";

import './DataUsers.css'



const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = e => {
    e.preventDefault();
    console.log(email)
    console.log(password)
    products.usersEmails.push(email)
    products.usersPasswords.push(password)
    setEmail("")
    setPassword("")


  };

  return (
    <div className="container">

      <div className="register_card">
        <div className="register_logo logo">
          <p>shopCart</p>
        </div>
        <div className="register_content">
          <label for="email" className="register_email_label">Email adress</label>
          <div className="register_email">
            <input
              className="register_input"
              type="email"
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              placeholder="Enter your email adress"
              value={email}
            />
          </div>
          <label for="password" className="register_password_label">Password</label>
          <div className="register_password">
            <input
              className="register_input"
              type="password"
              onChange={(e) => setPassword(e.target.value.toLowerCase())}
              placeholder="Enter your password"
              value={password}
            />
          </div>
          <div className="register_button">

            <button onClick={handleSubmit}>Submit</button>
          </div>
          {/* <button onClick={signInWithEmailAndPassword}>Clcik</button> */}
          <button onClick={signInWithGoogle}>google</button>
          <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>

        </div>

      </div>
    </div>
  );

}

export default Register;