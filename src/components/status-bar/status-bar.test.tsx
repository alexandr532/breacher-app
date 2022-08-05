import { render, screen } from '@testing-library/react';
import StatusBar from './';

test('renders learn react link', () => {
  render(<StatusBar />);
  const titleElement = screen.getByText(/Breacher::StatusBar/i);
  expect(titleElement).toBeInTheDocument();
});
