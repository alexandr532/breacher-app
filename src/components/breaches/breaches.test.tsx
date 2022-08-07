import { render, screen } from '@testing-library/react';
import { Breaches } from './breaches.component';

test('renders breaches component', () => {
  render(<Breaches />);
  const titleElement = screen.getByText(/Breacher::Breaches/i);
  expect(titleElement).toBeInTheDocument();
});
