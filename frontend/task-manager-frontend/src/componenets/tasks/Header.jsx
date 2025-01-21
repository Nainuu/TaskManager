import React from 'react'
import { useNavigate , Link } from 'react-router'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
          <h1>TASK</h1>
          <h2>MANAGER</h2>
      </div>
      <nav>
          <ul>
              <Link to='/dashboard'>Home</Link>
              <Link to='/task'>Tasks</Link>
              <Link to='/routines'>Routine</Link>
              <Link to='/notes'>Notes</Link>
              <Link to='/reminder'>Reminder</Link>
          </ul>
      </nav>
    </div> 
  )
}

export default Header
