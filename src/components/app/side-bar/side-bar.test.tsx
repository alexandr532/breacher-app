import { render, screen } from '@testing-library/react';
import { AppSideBar } from './side-bar.component';

test('renders app-side-bar', () => {
  render(<AppSideBar />);
  const titleElement = screen.getByText(/Breacher::AppSideBar/i);
  expect(titleElement).toBeInTheDocument();
});
