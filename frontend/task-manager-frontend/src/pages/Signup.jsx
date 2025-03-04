import React , {useState} from 'react'
import { Navigate, useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';


const Signup = () => {
  const [firstName , setFirsName] = useState('');
  const [lastName , setLastName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const nav = useNavigate();
  const handleClick = () => {
    nav('/login');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      fName : firstName,
      lName : lastName,
      uEmail : email,
      uPassword : password,
    };
    axios.post('http://localhost:5001/register' , user)
    .then(result => {
      console.log(result)
      nav('/login');
  })
    .catch(err => console.log("lalala error aa gaya" , err))
  }

  return (
   <div className='flex flex-col items-center pt-10'>
    <h2 className='font-bold text-3xl font-serif text-blue-950'>The Ultimate Task Manager</h2>
    <div className="flex flex-col max-w-sm w-full items-center bg-gradient-to-r from-slate-100 to-slate-300 rounded-xl p-6 mt-10 shadow-2xl border-4 border-slate-500">
      <ToastContainer />
      <h3 className="text-2xl font-bold font-serif text-black mb-4">Sign Up</h3>
      <form className="flex flex-col items-center w-full space-y-2" onSubmit={handleSubmit}>
        <label className="text-lg font-semibold text-black mt-3" htmlFor="fName">First Name</label>
        <input
          type="text"
          name="fName"
          className="bg-slate-900 placeholder-gray-400 border border-slate-600 rounded-lg p-2 text-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
          placeholder="First Name"
          required
          onChange={(e) => setFirsName(e.target.value)}
        />
        <label className="text-lg font-semibold text-gblack" htmlFor="lName">Last Name</label>
        <input
          type="text"
          name="lName"
          className="bg-slate-900 placeholder-gray-400 border border-slate-600 rounded-lg p-2 text-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
          placeholder="Last Name"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="text-lg font-semibold text-black" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="bg-slate-900 placeholder-gray-400 border border-slate-600 rounded-lg p-2 text-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
          placeholder="example@gmail.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-lg font-semibold text-black" htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="bg-slate-900 placeholder-gray-400 border border-slate-600 rounded-lg p-2 text-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
          placeholder="I am your Secret"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
         className="bg-slate-50 trantion-all duration-300 ease-in-out hover:font-bold hover:border-2 border border-black justify-items-center rounded-lg text-sm py-1 dark:text-black  w-32"
          onClick={() => toast.success("Please Wait!")}
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm text-gray-800 mt-3">
        Already have an account?
        <button
          className="text-gray-900 underline hover:font-bold ml-1"
          onClick={handleClick}
        >
          Sign In
        </button>
      </p>
    </div>
  </div>   
      )
}

export default Signup
