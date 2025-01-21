import React from 'react'
import { useNavigate , Link } from 'react-router'
import Date from '../componenets/shared/Date';
import Header from '../componenets/tasks/Header';


export default function Dashboard() {
    const navigate = useNavigate();

  return (
    <div>
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

        </div>
    </div>
  )
}
