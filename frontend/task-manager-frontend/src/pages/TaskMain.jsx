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
      .then((response) => setTasks(response.data))
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
    <div>
      <h2>TASK MANAGER</h2>

      <form onSubmit={handleTaskAdder}>
        <input
          type="text"
          placeholder="Enter the task here"
          required
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
        />
        <textarea
          placeholder="Enter the task description"
          required
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <p><strong>Name:</strong> {task.name}</p>
            <p><strong>Description:</strong> {task.description}</p>
            <button onClick={() => handleToggle(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskMain;
