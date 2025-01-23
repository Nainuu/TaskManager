import React from 'react'
import SignInForm from '../componenets/auth/SignInForm'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup')
  }
  return (
    <div className='flex flex-col items-center gap-5 '>
      <h2 className='font-bold text-3xl font-serif text-blue-950 '>The Ultimate Task Manager</h2>
      <div className='flex-grow flex-col  bg-slate-600 rounded-2xl max-w-sm flex items-center justify-center w-full m-5 pb-8'>
        <SignInForm />
        <p className='text-sm text-gray-100 mt-3'>
          No Account yet? <span onClick={handleClick}
           className="text-gray-900 hover:underline hover:font-bold ml-1">Sign Up</span>
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
