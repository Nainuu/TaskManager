import React from 'react'
import SignInForm from '../componenets/auth/SignInForm'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup')
  }
  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl font-serif text-blue-950 font-black'>The Ultimate Task Manager</h2>
      <div className='flex-grow flex-col flex items-center justify-center w-full'>
        <SignInForm />
        <p className='pt-2 font-semibold'>
          No Account yet?
        </p>
        <button onClick={handleClick} className='bg-slate-900 px-8 py-2 rounded-3xl my-3 hover:font-semibold text-white'>
          Sign Up
        </button>
      </div>
            {/* just for the sake of testing */}
      {/* <button onClick={() => navigate('/task')} >
        linking to task page for testing 
      </button> */}
    </div>
  )
}

export default Login
