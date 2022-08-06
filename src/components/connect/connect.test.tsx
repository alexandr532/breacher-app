import { render, screen } from '@testing-library/react';
import { Connect } from './connect.component';

test('renders connect component', () => {
  render(<Connect />);
  const titleElement = screen.getByText(/Breacher::Connect/i);
  expect(titleElement).toBeInTheDocument();
});
