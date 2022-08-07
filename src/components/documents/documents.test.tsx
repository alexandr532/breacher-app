import { render, screen } from '@testing-library/react';
import { Documents } from './documents.component';

test('renders documents component', () => {
  render(<Documents />);
  const titleElement = screen.getByText(/Breacher::Documents/i);
  expect(titleElement).toBeInTheDocument();
});
