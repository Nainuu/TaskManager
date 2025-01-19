import React from 'react'
import { useNavigate } from 'react-router'

const Landing = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  }
  return (
    <div className='landing'>
      <div>
        <div>The Ultimate task Manager</div>
        <button onClick={handleClick}>Login</button>
      </div>
      <div>
        <h1>A place where ideas meets fate</h1>
        <button>SignUp</button>
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
      </div>
    </div>
  )
}

export default Landing
