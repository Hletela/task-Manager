import React from 'react';

const SidePanel = ({ currentUser, taskCount, clearTasks }) => {
  return (
    <div className="side-panel">
      <p>Current User: {currentUser}</p>
      <p>Total Tasks: {taskCount}</p>
      <button onClick={clearTasks}>Clear Tasks</button>
    </div>
  );
};

export default SidePanel;
