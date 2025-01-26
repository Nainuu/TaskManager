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
    <div className="flex flex-col max-w-md w-full items-center rounded-xl gap-8">
  <ToastContainer />
  <h3 className="font-bold text-2xl font-serif text-black ">Welcome Back!</h3>
  <form
    className="flex flex-col items-center border-blue-950 gap-1 pb-4 w-full px-6"
    onSubmit={handleLoginSubmit}
  >
    <label className="font-semibold text-lg">Email</label>
    <input
      type="text"
      className="bg-slate-900 placeholder-gray-400 border border-slate-600 rounded-lg p-2 text-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
      placeholder="Example@gmail.com"
      required
      onChange={(e) => setEmail(e.target.value)}
    />
    <label className="text-lg mt-3 font-semibold">Password</label>
    <input
      type="text"
      className="bg-slate-900 placeholder-gray-400 border border-slate-600 rounded-lg p-2 text-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
      placeholder="I am your Secret"
      required
      onChange={(e) => setPassword(e.target.value)}
    />
    <button
      className="bg-slate-50 mt-2 trantion-all duration-300 ease-in-out hover:font-bold hover:border-2 border border-black justify-items-center rounded-lg text-sm py-1 dark:text-black  w-32"
      type="submit"
      onClick={() => toast.success("Please Wait!")}
    >
      Sign In
    </button>
  </form>
</div>

  );
}
