import React from 'react'
import { useNavigate } from 'react-router'


const Signup = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav('/login');
  }

  return (
    <div>
      SignUp
      <p>
        Already have an account
      </p>
      <button onClick={handleClick}>SignIn</button>
    </div>
  )
}

export default Signup
