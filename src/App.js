import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import SidePanel from './components/SidePanel';
import MarsImage from './components/MarsImage';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentUser, setCurrentUser] = useState('Elon Musk');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <MarsImage />
      <Header />
      <SidePanel currentUser={currentUser} taskCount={tasks.length} clearTasks={clearTasks} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
