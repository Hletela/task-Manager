import React, { useState } from 'react';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState('');
  const [assignee, setAssignee] = useState('');

  const startEditing = (task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setCreator(task.creator);
    setAssignee(task.assignee);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTask = { ...editingTask, title, description, creator, assignee };
    updateTask(updatedTask);
    setEditingTask(null);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Created by: {task.creator}</p>
          <p>Assigned to: {task.assignee}</p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => startEditing(task)}>Edit</button>
        </div>
      ))}
      {editingTask && (
        <form className="task-form" onSubmit={handleUpdate}>
          <h2>Edit Task</h2>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Update task title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Update task description"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="creator">Creator</label>
            <input
              type="text"
              id="creator"
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
              placeholder="Update creator's name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="assignee">Assignee</label>
            <input
              type="text"
              id="assignee"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              placeholder="Update assignee's name"
              required
            />
          </div>
          <button type="submit" className="btn-submit">Update Task</button>
        </form>
      )}
    </div>
  );
};

export default TaskList;
