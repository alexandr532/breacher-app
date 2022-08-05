import { render, screen } from '@testing-library/react';
import Main from './';

test('renders learn react link', () => {
  render(<Main />);
  const titleElement = screen.getByText(/Breacher::Main/i);
  expect(titleElement).toBeInTheDocument();
});
