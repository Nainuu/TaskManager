import React from 'react'
import { useNavigate } from 'react-router'
import Date from '../componenets/shared/Date';
import Header from '../componenets/tasks/Header';
import Summary from '../componenets/Summary';
import { Route ,Routes } from 'react-router';
import TaskMain from './TaskMain';
import Routine from '../componenets/Routine';


export default function Dashboard() {
    const navigate = useNavigate();
  
    return (
      <div className="flex flex-col sm:flex-row border border-white rounded-sm m-0 bg-slate-200 min-h-screen">
        <Header />
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center border-2 border-slate-500 p-3 bg-slate-100">
            <Date />
            <p className="font-semibold font-mono text-sm sm:text-base lg:text-lg">Husnain Anwar</p>
          </div>
          <Routes>
            <Route path="" element={<Summary/>}/>
            <Route path="tasks" element={<TaskMain />} />
            <Route path="routine" element={<Routine/>}/>
          </Routes>

        </div>
      </div>
    );
  }
