import { render, screen } from '@testing-library/react';
import Auth from './';

test('renders learn react link', () => {
  render(<Auth />);
  const titleElement = screen.getByText(/Breacher::Auth/i);
  expect(titleElement).toBeInTheDocument();
});
