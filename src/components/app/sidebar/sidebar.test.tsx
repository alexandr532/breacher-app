import { render, screen } from '@testing-library/react';
import { AppSidebar } from './sidebar.component';

test('renders app-sidebar', () => {
  render(<AppSidebar />);
  const titleElement = screen.getByText(/Breacher::AppSidebar/i);
  expect(titleElement).toBeInTheDocument();
});
