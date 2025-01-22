import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Card({name}) {

    const [taskNo, setTaskNo] = useState(0); // State for task count
    console.log("okkk");
    
    useEffect(() => {
      axios.get('http://localhost:5001/tasks')
        .then((response) => {
            console.log(response.data)
          setTaskNo(response.data.taskNo);
          console.log("ok")
        })
        .catch((error) => console.error('Error fetching tasks:', error));
    }, []);

    const navigate = useNavigate();
  return (
    <div>
      <h3>{name}</h3>
      <p>You have {taskNo} {name}{taskNo > 1 ? 's' : ""} pending.</p>
      <button onClick={ () => navigate('/task')}>View {name}{taskNo > 1 ? 's' : ""}</button>
    </div>
  )
}
