import { render, screen } from '@testing-library/react';
import { Collections } from './collections.component';

test('renders collections component', () => {
  render(<Collections />);
  const titleElement = screen.getByText(/Breacher::Collections/i);
  expect(titleElement).toBeInTheDocument();
});
