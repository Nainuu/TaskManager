import React, { useEffect, useState } from 'react';
import axios from 'axios';

// 

const Routine = () => {
  const [routine, setRoutine] = useState([]);
  const [routineTime, setRoutineTime] = useState('');
  const [routineDay, setRoutineDay] = useState([]);
  const [routineTitle, setRoutineTitle] = useState('');
  const [routineDescription, setRoutineDescription] = useState('');

  // Fetch Routines from Backend
  useEffect(() => {
    axios.get('http://localhost:5001/routine')
      .then((response) => 
        setRoutine(response.data.routine))
      .catch((error) => console.error('Error fetching routiness:', error));
  }, []);

  // Add Task
  const handleRoutineAdder = (e) => {
    e.preventDefault();
    const newRoutine = { 
      rDay : routineDay,
      rTime : routineTime,
      rTitle: routineTitle, 
      rDescription: routineDescription };

    axios.post('http://localhost:5001/routine', newRoutine)
      .then((response) => {
        setRoutine([...routine, response.data]);
        setRoutineTime('');
        setRoutineDay([]);
        setRoutineTitle('');
        setRoutineDescription('');
      })
      .catch((error) => console.error('Error adding Routine:', error));
  };

  // Delete Task
  const handleToggle = (routineID) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this routine?");
    if (confirmDelete) {
      axios.delete(`http://localhost:5001/routine/${routineID}`)
        .then(() => setRoutine(routine.filter((routine) => routine._id !== routineID)))
        .catch((error) => console.error('Error deleting routine:', error));
    }
  };
  

  return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
        <h2 className="text-3xl font-bold font-serif text-black mb-5">ADD TO YOUR ROUTINE</h2>

        <form 
          className="w-full max-w-md bg-white shadow-md rounded-lg p-5 space-y-4"
          onSubmit={handleRoutineAdder}
        >
          <select
            multiple
            required
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setRoutineDay([...e.target.selectedOptions].map(option => option.value))}
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <select
            required
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setRoutineTime(e.target.value)}
            value={routineTime}
          >
            <option value="Early Morning">Early Morning</option>
            <option value="Morning">Morning</option>
            <option value="Noon">Noon</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Night">Night</option>
          </select>  
          <input
            type="text"
            placeholder="Enter the Routine title here"
            required
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setRoutineTitle(e.target.value)}
            value={routineTitle}
          />
          <textarea
            placeholder="Enter the routine description"
            required
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setRoutineDescription(e.target.value)}
            value={routineDescription}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 font-serif">YOUR ROUTINE</h2>
        <ul className="w-full max-w-md space-y-6 mt-5">
  {routine && routine.map((routine) => (
    <li
      key={routine._id}
      className="bg-white shadow-lg space-x-4 rounded-lg p-4 flex justify-between items-center"
    >
      <div className='flex flex-col items-start space-y-2'>
        <p className="text-lg font-semibold text-gray-800">
          <span>Title:</span> <span className='font-bold underline-offset-4 underline'>{routine.rTitle}</span>
        </p>
        <p className="text-md text-gray-600 text-justify pr-4">
          <strong>Description:</strong> {routine.rDescription}
        </p>
        <p className="text-md text-gray-600">
          <strong>Day:</strong> {routine.rDay?.join(', ') || 'N/A'} 
        </p>
        <p className="text-md text-gray-600">
          <strong>Time:</strong> {routine.rTime || 'N/A'}
        </p>
      </div>
      <button
        onClick={() => handleToggle(routine._id)}
        className="text-red-500 hover:text-red-700 font-semibold text-sm"
      >
        Delete
      </button>
    </li>
  ))}
</ul>

      </div>

  );
};

export default Routine;
