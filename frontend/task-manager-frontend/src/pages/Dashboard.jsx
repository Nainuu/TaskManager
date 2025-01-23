import React from 'react'
import { useNavigate , Link } from 'react-router'
import Date from '../componenets/shared/Date';
import Header from '../componenets/tasks/Header';
import Card from '../componenets/shared/Card';


export default function Dashboard() {
    const navigate = useNavigate();
  
    return (
      <div className="flex flex-col sm:flex-row border border-white rounded-sm m-0 bg-slate-200 min-h-screen">
        <Header />
        <div className="flex flex-col flex-grow">
          {/* Top Section */}
          <div className="flex justify-between items-center border-2 border-slate-500 p-3 bg-slate-100">
            <Date />
            <p className="font-semibold font-mono text-sm sm:text-base lg:text-lg">Husnain Anwar</p>
          </div>
  
          {/* Main Content */}
          <div className="flex flex-col flex-grow bg-slate-200 font-geist p-4">
            {/* Welcome Section */}
            <div className="mb-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-left">
                Welcome to the Dashboard
              </h2>
              <h3 className="text-sm sm:text-base lg:text-lg text-center sm:text-left">
                This is your Dashboard where you can manage your routine, tasks, and notes.
              </h3>
            </div>
  
            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
              {/* Cards for Task, Routine, Notes, Reminder */}
              <Card name="Task" />
              <Card name="Routine" />
              <Card name="Notes" />
              <Card name="Reminder" />
            </div>
          </div>
        </div>
      </div>
    );
  }
