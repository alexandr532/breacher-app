import { render, screen } from '@testing-library/react';
import { Home } from './home.component';

test('renders learn react link', () => {
  render(<Home />);
  const titleElement = screen.getByText(/Breacher::Home/i);
  expect(titleElement).toBeInTheDocument();
});
