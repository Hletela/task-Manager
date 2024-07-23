import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), title, description, creator, assignee });
    setTitle('');
    setDescription('');
    setCreator('');
    setAssignee('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Create a New Task</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter task title" required />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter task description" required />
      </div>
      <div className="form-group">
        <label htmlFor="creator">Creator</label>
        <input type="text" id="creator" value={creator} onChange={(e) => setCreator(e.target.value)} placeholder="Enter creator's name" required />
      </div>
      <div className="form-group">
        <label htmlFor="assignee">Assignee</label>
        <input type="text" id="assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)} placeholder="Enter assignee's name" required />
      </div>
      <button type="submit" className="btn-submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
