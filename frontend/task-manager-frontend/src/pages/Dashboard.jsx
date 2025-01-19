import React from 'react'
import { useNavigate } from 'react-router'
import Date from '../componenets/shared/Date';


export default function Dashboard() {
    const navigate = useNavigate();

  return (
    <div>
        <div>
            this is the left hand side
        </div>  
        <div>
            {/* right hand side */}
            <div>
                {/* top  */}
                <Date/>
            </div>
        </div>
    </div>
  )
}
