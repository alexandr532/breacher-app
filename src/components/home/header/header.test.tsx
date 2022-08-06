import { render, screen } from '@testing-library/react';
import { HomeHeader } from './header.component';

test('renders learn react link', () => {
  render(<HomeHeader />);
  const titleElement = screen.getByText(/Breacher::HomeHeader/i);
  expect(titleElement).toBeInTheDocument();
});
