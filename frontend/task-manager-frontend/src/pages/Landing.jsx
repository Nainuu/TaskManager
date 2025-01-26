import React from 'react'
import { useNavigate } from 'react-router'

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  }

  return (
    <div className='landing flex flex-col py-20 '>
      <div className='flex flex-col justify-center items-center flex-grow text-center px-5 sm:px-10 py-12'>
        {/* Top section */}
        <h1 className='font-extrabold text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900'>
          The Ultimate Task Manager
        </h1>
        <p className='mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-700'>
          A simple and effective tool to manage your tasks, Routines, Notes and boost productivity.
        </p>
        <button 
          onClick={handleClick} 
          className='mt-8 bg-slate-900 text-white px-8 py-3 rounded-full hover:font-semibold transition-all transform hover:scale-105 shadow-lg'>
          Login
        </button>
      </div>

      <div className='flex flex-col justify-center items-center text-center px-5 sm:px-10 pb-12 '>
        {/* Bottom section */}
        <h2 className='font-semibold text-3xl sm:text-4xl lg:text-5xl text-gray-900'>
          A place where ideas meet <span className='text-slate-900 font-extrabold'>Fate</span>
        </h2>
        <p className='mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto'>
          New here? Join Us
        </p>
        <button 
          onClick={() => navigate('/signup')} 
          className='mt-6 bg-slate-900 text-white px-8 py-3 rounded-full hover:font-semibold transition-all transform hover:scale-105 shadow-lg'>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Landing;
