import React from "react";
// import { signInWithGoogle } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { signInWithGoogle } from "../../../firebase";
import { auth } from "../../../firebase";
import products from "../../../store/products";

import './DataUsers.css'



const Register = () => {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = e => {
    e.preventDefault();
    products.user =   
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
        <div className="register_logo_div">

        <div className="register_logo logo">
          <p>shopCart</p>
        </div>
        </div>
        <div className="register_content">
          <label for="email" className="register_email_label">First Name</label>
          <input
              className="register_input"
              type="email"
              onChange={(e) => setFirstName(e.target.value.toLowerCase())}
              placeholder="Enter your first name"
              value={email}
            />
                      <label for="email" className="register_email_label">First Name</label>
          <input
              className="register_input"
              type="email"
              onChange={(e) => setLastName(e.target.value.toLowerCase())}
              placeholder="Enter your last name"
              value={email}
            />
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
          <div className="register_button_div">

            <button onClick={handleSubmit} className="register_button">Submit</button>
          </div>
          {/* <button onClick={signInWithEmailAndPassword}>Clcik</button> */}

        </div>
        <hr/>
        <div>
            <span>Use your google account</span>
          <button onClick={signInWithGoogle} className="google_button"><img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" className="google_icon"/>google</button>
        </div>
          <div className="sign_out">

            <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
          </div>
      </div>
    </div>
  );

}

export default Register;