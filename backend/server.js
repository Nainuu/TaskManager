const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const parseBody = require('body-parser');
// const sample = require('./models/SampleModel') // this is just for later purpose and is a sample

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

const registerSchema = new mongoose.Schema({
  fName : String,
  lName : String,
  uEmail : String,
  uPassword : String
});

const Task = mongoose.model('Task', taskScheme);
const Register = mongoose.model('Register' , registerSchema);

// Uncomment to seed database once, then comment again
// seedDatabase();

// for the user Register and login
app.post('/register', async (req, res) => {
  console.log("Request body:", req.body); 
  try {
    const newUser = new Register(req.body); 
    await newUser.save(); 
    console.log("User saved:", newUser); 
    res.status(201).json(newUser); 
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "An error occurred while saving the user." });
  }
});

app.post('/login', async (req, res) => {
  console.log("Request body:", req.body); 
  try {
    const userAuth = req.body;
    Register.findOne({uEmail : userAuth.uEmail})
    .then(user => {
      if(user){
        if(user.uPassword === userAuth.uPassword) {
          red.json("Success");
        } else {
          res.json("Password is incorrect");
        }
      } else  {
        res.json("no record existed");
      }
    })
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "An error occurred while saving the user." });
  }
});


app.get('/tasks', async (req, res) => {
  try {
    const allTasks = await Task.find();
    const taskCount = allTasks.length; 
    res.json({ tasks: allTasks, taskNo: taskCount }); 
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
