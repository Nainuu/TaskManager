import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskMain = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskNo , setTaskNo] = useState();

  // Fetch Tasks from Backend
  useEffect(() => {
    axios.get('http://localhost:5001/tasks')
      .then((response) => 
        setTasks(response.data.tasks))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  // Add Task
  const handleTaskAdder = (e) => {
    e.preventDefault();
    const newTask = { name: taskName, description: taskDescription };

    axios.post('http://localhost:5001/tasks', newTask)
      .then((response) => {
        setTasks([...tasks, response.data]);
        setTaskName('');
        setTaskDescription('');
      })
      .catch((error) => console.error('Error adding task:', error));
  };

  // Delete Task
  const handleToggle = (taskId) => {
    axios.delete(`http://localhost:5001/tasks/${taskId}`)
    .then(() => setTasks(tasks.filter((task) => task._id !== taskId)))
    .catch((error) => console.error('Error deleting task:', error));
  };

  return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
        <h2 className="text-3xl font-bold font-serif text-black mb-5">TASK MANAGER</h2>

        <form 
          className="w-full max-w-md bg-white shadow-md rounded-lg p-5 space-y-4"
          onSubmit={handleTaskAdder}
        >
          <input
            type="text"
            placeholder="Enter the task here"
            required
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
          <textarea
            placeholder="Enter the task description"
            required
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 font-serif">TASK LIST</h2>
        <ul className="w-full max-w-md space-y-6 mt-5">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="bg-white shadow-lg space-x-4 rounded-lg p-4 flex justify-between items-center"
            >
              <div className='flex flex-col items-start space-y-2 '>
                <p className="text-lg font-semibold text-gray-800">
                  <span>Name:</span> <span className='font-bold underline-offset-4 underline '>{task.name}</span>
                </p>
                <p className="text-md text-gray-600">
                  <strong>Description:</strong> {task.description}
                </p>
              </div>
              <button
                onClick={() => handleToggle(task._id)}
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

export default TaskMain;
