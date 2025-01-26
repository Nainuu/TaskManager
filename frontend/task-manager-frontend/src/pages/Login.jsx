import React from 'react'
import SignInForm from '../componenets/auth/SignInForm'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup')
  }
  return (
    <div className='flex flex-col items-center gap-5 pt-10 '>
      <h2 className='font-bold text-3xl font-serif text-blue-950 '>The Ultimate Task Manager</h2>
      <div className='flex flex-col max-w-sm w-full items-center bg-gradient-to-r from-slate-100 to-slate-300 rounded-xl py-6 mt-10 shadow-2xl border-4 border-slate-500'>
        <SignInForm />
        <p className='text-sm text-gray-800 mt-3'>
          No Account yet? <span onClick={handleClick}
           className="text-gray-900 underline hover:font-bold ml-1">Sign Up</span>
        </p>
      </div>
            {/* just for the sake of testing */}
      {/* <button onClick={() => navigate('/task')} >
        linking to task page for testing 
      </button> */}
    </div>
  )
}

export default Login
