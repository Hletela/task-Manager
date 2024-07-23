import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders header and side panel', () => {
  render(<App />);
  expect(screen.getByText('Mars Mission Task Tracker')).toBeInTheDocument();
  expect(screen.getByText('Current User: Elon Musk')).toBeInTheDocument();
  expect(screen.getByText('Total Tasks: 0')).toBeInTheDocument();
});

test('adds a new task', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText('Enter task title'), { target: { value: 'Test Task' } });
  fireEvent.change(screen.getByPlaceholderText('Enter task description'), { target: { value: 'This is a test task' } });
  fireEvent.change(screen.getByPlaceholderText('Enter creator\'s name'), { target: { value: 'Elon Musk' } });
  fireEvent.change(screen.getByPlaceholderText('Enter assignee\'s name'), { target: { value: 'Jane Smith' } });
  fireEvent.click(screen.getByText('Add Task'));
  expect(screen.getByText('Test Task')).toBeInTheDocument();
  expect(screen.getByText('This is a test task')).toBeInTheDocument();
  expect(screen.getByText('Created by: Elon Musk')).toBeInTheDocument();
  expect(screen.getByText('Assigned to: Jane Smith')).toBeInTheDocument();
  expect(screen.getByText('Total Tasks: 1')).toBeInTheDocument();
});

test('edits an existing task', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText('Enter task title'), { target: { value: 'Test Task' } });
  fireEvent.change(screen.getByPlaceholderText('Enter task description'), { target: { value: 'This is a test task' } });
  fireEvent.change(screen.getByPlaceholderText('Enter creator\'s name'), { target: { value: 'Elon Musk' } });
  fireEvent.change(screen.getByPlaceholderText('Enter assignee\'s name'), { target: { value: 'Jane Smith' } });
  fireEvent.click(screen.getByText('Add Task'));

  fireEvent.click(screen.getByText('Edit'));
  fireEvent.change(screen.getByPlaceholderText('Update task title'), { target: { value: 'Updated Task' } });
  fireEvent.click(screen.getByText('Update Task'));
  expect(screen.getByText('Updated Task')).toBeInTheDocument();
  expect(screen.queryByText('Test Task')).not.toBeInTheDocument();
});
