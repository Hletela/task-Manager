import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from '../components/TaskForm';

test('renders TaskForm correctly', () => {
  const addTask = jest.fn();
  render(<TaskForm addTask={addTask} />);
  expect(screen.getByText('Add Task')).toBeInTheDocument();
});

test('submits form correctly', () => {
  const addTask = jest.fn();
  render(<TaskForm addTask={addTask} />);
  fireEvent.change(screen.getByPlaceholderText('Enter task title'), { target: { value: 'New Task' } });
  fireEvent.change(screen.getByPlaceholderText('Enter task description'), { target: { value: 'Task description' } });
  fireEvent.change(screen.getByPlaceholderText('Enter creator\'s name'), { target: { value: 'Creator' } });
  fireEvent.change(screen.getByPlaceholderText('Enter assignee\'s name'), { target: { value: 'Assignee' } });
  fireEvent.click(screen.getByText('Add Task'));
  // expect(addTask).toHaveBeenCalledWith({
  //   id: expect.any(String),
  //   title: 'New Task',
  //   description: 'Task description',
  //   creator: 'Creator',
  //   assignee: 'Assignee',
  // });
  expect(addTask).toHaveBeenCalledWith(
    expect.objectContaining({
      title: 'New Task',
      description: 'Task description',
      creator: 'Creator',
      assignee: 'Assignee',
    })
  );
});
