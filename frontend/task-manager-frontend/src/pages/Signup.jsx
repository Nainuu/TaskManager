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
    <div>
      <ToastContainer/>
      <h3>Sign Up</h3>
      <form className="" onSubmit={handleSubmit}>
        <label className="" htmlFor='fName'>First Name</label>
        <input 
        type="text"
        name = "fName"
        placeholder=""
        required
        onChange={(e) => setFirsName(e.target.value)}
         />
        <label className="">Last Name</label>
        <input 
        type="text"
        placeholder=""
        required
        onChange={(e) => setLastName(e.target.value)}
         />
        <label className="" htmlFor='email'>Email</label>
        <input 
        type="email"
        placeholder="example@gmail.com"
        required
        onChange={(e) => setEmail(e.target.value)}
         />
        <label className="" htmlFor='password'>Password</label>
        <input 
        type="password"
        placeholder="I am your Secret"
        required
        onChange={(e) => setPassword(e.target.value)}
         />
         <button 
         type='submit'
         onClick={() => toast.success("Please Wait!")}>
            Sign Up
         </button>
            </form>
      <p>
        Already have an account
      </p>
      <button onClick={handleClick}>SignIn</button>
    </div>
  )
}

export default Signup
