import React from 'react'
import { useNavigate , Link } from 'react-router'
import Date from '../componenets/shared/Date';
import Header from '../componenets/tasks/Header';
import Card from '../componenets/shared/Card';


export default function Dashboard() {
    const navigate = useNavigate();

  return (
    <div className="flex border border-white rounded-sm m-0 bg-slate-200 min-h-screen">
        <Header />
        <div className='flex flex-col space-y-3 flex-grow min-w-0'>
            <div className='flex justify-between border-2 border-slate-500 p-3 bg-slate-100'>
                <Date/>
                <p className='font-semibold font-mono'>Husnain Anwar</p>
            </div>
            <div className='flex flex-col flex-grow bg-slate-200 font-geist'>
                <div className=''>
                    <div className=''>
                        <h2 className='text-3xl p-3 font-semibold'>Welcome to the Dashboard</h2>
                        <h3 className=''>This is your Dashboard where you can manage your routine,tasks and notes</h3>
                    </div>
                </div>
                <div className='flex justify-center space-x-5 m-5'>
                    {/* This will show the summary for all the count of the UL things */}
                    <Card name = "Task" />
                    <Card name = "Routine" />
                    <Card name = "Notes" />
                    <Card name = "Reminder" />
                </div>
            </div>

        </div>
    </div>
  )
}
