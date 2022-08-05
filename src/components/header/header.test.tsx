import { render, screen } from '@testing-library/react';
import Header from './';

test('renders learn react link', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Breacher::Header/i);
  expect(titleElement).toBeInTheDocument();
});
