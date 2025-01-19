import React from 'react'
import SignInForm from '../componenets/auth/SignInForm'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup')
  }
  return (
    <div>
      <h2>The Ultimate Task Manager</h2>
      <div>
        <SignInForm />
        <p>
          No Account yet?
        </p>
        <button onClick={handleClick}>SignUp</button>
      </div>
            {/* just for the sake of testing */}
      <button onClick={() => navigate('/task')}>
        linking to task page for testing 
      </button>
    </div>
  )
}

export default Login
