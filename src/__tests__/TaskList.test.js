import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from '../components/TaskList';

const sampleTasks = [
  { id: '1', title: 'Sample Task 1', description: 'Description 1', creator: 'John', assignee: 'Jane' },
  { id: '2', title: 'Sample Task 2', description: 'Description 2', creator: 'Alice', assignee: 'Bob' }
];

test('renders TaskList correctly', () => {
  render(<TaskList tasks={sampleTasks} updateTask={jest.fn()} deleteTask={jest.fn()} />);
  expect(screen.getByText('Sample Task 1')).toBeInTheDocument();
  expect(screen.getByText('Sample Task 2')).toBeInTheDocument();
});

test('calls deleteTask on delete button click', () => {
  const deleteTask = jest.fn();
  render(<TaskList tasks={sampleTasks} updateTask={jest.fn()} deleteTask={deleteTask} />);
  fireEvent.click(screen.getAllByText('Delete')[0]);
  expect(deleteTask).toHaveBeenCalledWith('1');
});
