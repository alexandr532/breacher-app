import { render, screen } from '@testing-library/react';
import { AppHeader } from './header.component';

test('renders app-header', () => {
  render(<AppHeader />);
  const titleElement = screen.getByText(/Breacher::AppHeader/i);
  expect(titleElement).toBeInTheDocument();
});
