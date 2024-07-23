import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MarsImage from '../components/MarsImage';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    url: 'https://source.unsplash.com/random/800x600/?mars',
  })
);

test('fetches and displays the Mars image', async () => {
  render(<MarsImage />);

  // Wait for the image to be displayed
  await waitFor(() => {
    expect(screen.getByAltText('Mars')).toBeInTheDocument();
  });

  // Simulate an error and retry
  global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Image not found')));
  fireEvent.click(screen.getByText('Retry'));

  // Wait for the error message
  await waitFor(() => {
    expect(screen.getByText('Failed to load image.')).toBeInTheDocument();
  });
});
