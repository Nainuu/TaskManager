import React from 'react'
import { useNavigate , Link } from 'react-router'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-slate-800 text-slate-200 px-2 py-4 min-w-52'>
      <div >
          <h1 className='font-extrabold text-6xl font-serif'>TASK</h1>
          <h2 className='font-semibold text-2xl font-serif'>MANAGER</h2>
      </div>
      <nav className="mt-3 flex flex-col pl-3 items-center p-4 rounded-lg shadow-lg">
        <ul className="flex flex-col space-y-4 text-white">
          <li>
            <Link 
              to="/dashboard" 
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/task" 
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Tasks
            </Link>
          </li>
          <li>
            <Link 
              to="/routines" 
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Routine
            </Link>
          </li>
          <li>
            <Link 
              to="/notes" 
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Notes
            </Link>
          </li>
          <li>
            <Link 
              to="/reminder" 
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Reminder
            </Link>
          </li>
        </ul>
        <div className="mt-6 flex flex-col items-center w-full">
          <button 
            onClick={() => navigate("/login")}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-4 rounded-lg transition-transform transform hover:scale-105"
          >
            Sign Out
          </button>
        </div>
      </nav>

    </div> 
  )
}

export default Header
