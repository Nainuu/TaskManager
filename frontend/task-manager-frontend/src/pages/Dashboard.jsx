import React from 'react'
import { useNavigate , Link } from 'react-router'
import Date from '../componenets/shared/Date';
import Header from '../componenets/tasks/Header';
import Card from '../componenets/shared/Card';


export default function Dashboard() {
    const navigate = useNavigate();

  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg">
        <Header />
        <div>
            {/* right hand side */}
            <div>
                {/* top  */}
                <Date/>
                <p>Husnain Anwar</p>
            </div>
            <div>
                <div>
                    <h2>Welcome to the Dashboard</h2>
                    <h3>This is your Dashboard where you can manage your routine,tasks and notes</h3>
                </div>
                <div>
                    {/* cards */}
                    
                </div>
            </div>
            <div>
                {/* This will show the summary for all the count of the UL things */}
                <Card name = "Task" />
                <Card name = "Routine" />
                <Card name = "Notes" />
                <Card name = "Reminder" />
                

            </div>

        </div>
    </div>
  )
}
