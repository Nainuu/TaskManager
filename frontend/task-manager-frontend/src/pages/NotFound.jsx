import React from 'react';
import { Link } from 'react-router-dom';  // Make sure to import Link

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-700 mt-4">Oops! Page Not Found</p>
      <p className="mt-2 text-gray-500">The page you are looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
