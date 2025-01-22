import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router";

export default function SignInForm() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const nav = useNavigate();

    const handleLoginSubmit = (e) => {
      e.preventDefault();
      const newUser = {
        uemail : email,
        uPassword : password
      }
      axios.post('http://localhost:5001/login' , newUser)
      .then(Response => {
        console.log(response)
        nav("/dashboard");
    })
      .catch(err => console.log(err))
    }

  return (
    <div>
      <ToastContainer />
      <h3>Welcome Back!</h3>
      <form className="" onSubmit={handleLoginSubmit}>
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
         <button type="submit" onClick={() => toast.success("Please Wait!")}>
            Sign In
         </button>
      </form>
    </div>
  );
}
