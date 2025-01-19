import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignInForm() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');


  return (
    <div>
      <ToastContainer />
      <h3>Welcome Back!</h3>
      <div className="">
        <label className="">Email</label>
        <input 
        type="text"
        placeholder="example@gmail.com"
        required
        onChange={(e) => setEmail(e.target.value)}
         />
        <label className="">Password</label>
        <input 
        type="text"
        placeholder="I am your Secret"
        required
        onChange={(e) => setPassword(e.target.value)}
         />
         <button onClick={() => toast.success("Please Wait!")}>
            Sign In
         </button>
      </div>
    </div>
  );
}
