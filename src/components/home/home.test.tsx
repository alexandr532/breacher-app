import { render, screen } from '@testing-library/react';
import { Home } from './home.component';

test('renders home component', () => {
  render(<Home />);
  const titleElement = screen.getByText(/Breacher::Home/i);
  expect(titleElement).toBeInTheDocument();
});
