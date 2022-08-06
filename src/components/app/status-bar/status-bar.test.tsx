import { render, screen } from '@testing-library/react';
import { AppStatusBar } from './status-bar.component';

test('renders app-status-bar', () => {
  render(<AppStatusBar />);
  const titleElement = screen.getByText(/Breacher::App``StatusBar/i);
  expect(titleElement).toBeInTheDocument();
});
