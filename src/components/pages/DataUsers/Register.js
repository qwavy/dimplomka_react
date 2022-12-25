import React from "react";
// import { signInWithGoogle } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { signInWithGoogle } from "../../../firebase";
import { auth } from "../../../firebase";
import products from "../../../store/products";


const Register = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


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
      <div>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          placeholder="email"
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value.toLowerCase())}
          placeholder="password"
        />
        <p>{password}</p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={signInWithEmailAndPassword}>Clcik</button>
        <button onClick={signInWithGoogle}>google</button>
        <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
      </div>
    );
  
}

export default Register;