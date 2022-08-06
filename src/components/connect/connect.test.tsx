import { render, screen } from '@testing-library/react';
import { Connect } from './connect.component';

test('renders learn react link', () => {
  render(<Connect />);
  const titleElement = screen.getByText(/Breacher::Connect/i);
  expect(titleElement).toBeInTheDocument();
});
