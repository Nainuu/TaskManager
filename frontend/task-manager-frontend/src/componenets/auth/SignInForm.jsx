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
        uEmail : email,
        uPassword : password
      }
      axios.post('http://localhost:5001/login' , newUser)
      .then(response => {
        console.log("response")
        if (response.data === "Success") {
          nav("/dashboard");
        } else if (response.data === "noPassword") {
          console.log("No user exists");
        }
    })
      .catch(err => console.log(err))
    }

  return (
    <div className="flex flex-col max-w-xs pb-8 w-full items-center bg-slate-600 rounded-xl gap-8 mt-5">
      <ToastContainer />
      <h3 className="font-bold text-2xl font-serif text-black font-black ">Welcome Back!</h3>
      <form className="flex flex-col border-blue-950 " onSubmit={handleLoginSubmit} >
        <label className="text-sm font-bold">Email</label>
        <input 
        type="text"
        className="bg-slate-800 placeholder:px-2 border border-black rounded-lg p-1 text-sm text-white"
        placeholder="example@gmail.com"
        required
        onChange={(e) => setEmail(e.target.value)}
         />
        <label className="text-sm mt-3 font-bold">Password</label>
        <input 
        type="text"
        className="bg-slate-800 placeholder:px-2 border border-black rounded-lg p-1 text-sm text-white"
        placeholder="I am your Secret"
        required
        onChange={(e) => setPassword(e.target.value)}
         />
         <button 
         className="bg-slate-50 w-full rounded-xl text-sm py-1 dark:text-black my-3"
         type="submit" 
         onClick={() => toast.success("Please Wait!")}>
            Sign In
         </button>
      </form>
    </div>
  );
}
