import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react'
import './App.css'
import Header from './componenets/tasks/Header'
import Test from './Test'
import TaskMain from './pages/TaskMain'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashboard/*" element={<Dashboard/>} />
            <Route path="/task" element={<TaskMain/>} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </>
  )
}
