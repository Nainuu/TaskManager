import React from 'react'
import { useNavigate } from 'react-router'

const Landing = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  }
  return (
    <div className='landing flex flex-col gap-10'>
      <div className=''>
        <h1 className='font-bold text-5xl font-serif text-blue-950 font-black'>The Ultimate Task Manager</h1>
        <button onClick={handleClick} className='bg-slate-900 px-8 py-3 rounded-3xl my-5 hover:font-semibold'>Login</button>
      </div>
      <div>
        <h1 className='font-bold text-5xl font-serif text-blue-950 font-black'>A place where ideas meets <strong className='text-6xl'>Fate</strong></h1>
        <button onClick={() => navigate('/signup')} className='bg-slate-900 px-8 py-3 rounded-3xl my-5 hover:font-semibold'>SignUp</button>
        {/* <button onClick={() => navigate('/dashboard')}>Dashboard</button> */}
      </div>
    </div>
  )
}

export default Landing
