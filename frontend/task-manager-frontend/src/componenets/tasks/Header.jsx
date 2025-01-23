import React from 'react'
import { useNavigate , Link } from 'react-router'

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-800 text-slate-200 px-4 py-6 sm:py-8 sm:px-6 lg:px-8 min-w-52">
      {/* Logo Section */}
      <div className="text-center sm:text-left">
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl font-serif">TASK</h1>
        <h2 className="font-semibold text-lg sm:text-xl lg:text-2xl font-serif">MANAGER</h2>
      </div>

      {/* Navigation Section */}
      <nav className="mt-5 flex flex-col items-center sm:items-start space-y-5">
        <ul className="flex flex-col items-center sm:items-start space-y-4 text-white">
          <li>
            <Link
              to="/dashboard"
              className="hover:text-blue-400 transition-colors duration-200 text-base sm:text-lg lg:text-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/tasks"
              className="hover:text-blue-400 transition-colors duration-200 text-base sm:text-lg lg:text-xl"
            >
              Tasks
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/routine"
              className="hover:text-blue-400 transition-colors duration-200 text-base sm:text-lg lg:text-xl"
            >
              Routine
            </Link>
          </li>
          <li>
            <Link
              to="/notes"
              className="hover:text-blue-400 transition-colors duration-200 text-base sm:text-lg lg:text-xl"
            >
              Notes
            </Link>
          </li>
          <li>
            <Link
              to="/reminder"
              className="hover:text-blue-400 transition-colors duration-200 text-base sm:text-lg lg:text-xl"
            >
              Reminder
            </Link>
          </li>
        </ul>

        {/* Sign Out Button */}
        <div className="mt-8 flex justify-center sm:justify-start w-full">
          <button
            onClick={() => navigate("/login")}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition-transform transform hover:scale-105 text-sm sm:text-base lg:text-lg"
          >
            Sign Out
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;

