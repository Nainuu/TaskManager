const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const parseBody = require('body-parser');

const app = express();

app.use(cors());
app.use(parseBody.json());

mongoose
  .connect('mongodb://localhost:27017/taskdb')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const taskScheme = new mongoose.Schema({
  name: String,
  description: String,
});

const Task = mongoose.model('Task', taskScheme);

// Uncomment to seed database once, then comment again
// seedDatabase();

app.get('/tasks', async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.json(allTasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add task' });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

const port = 5001;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
