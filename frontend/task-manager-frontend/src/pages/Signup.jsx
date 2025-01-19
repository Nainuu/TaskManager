import React , {useState} from 'react'
import { useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify';


const Signup = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [firstName , setFirsName] = useState('');
  const [lastName , setLastName] = useState('');

  const nav = useNavigate();
  const handleClick = () => {
    nav('/login');
  }

  return (
    <div>
      <ToastContainer/>
      <h3>Sign Up</h3>
      <div className="">
        <label className="">First Name</label>
        <input 
        type="text"
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
            Sign Up
         </button>
            </div>
      <p>
        Already have an account
      </p>
      <button onClick={handleClick}>SignIn</button>
    </div>
  )
}

export default Signup
