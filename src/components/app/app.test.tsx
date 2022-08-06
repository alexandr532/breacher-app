import { render, screen } from '@testing-library/react';
import { App } from './app.component';

test('renders app component', () => {
  render(<App />);
  const titleElement = screen.getByText(/Breacher::MongoDb/i);
  expect(titleElement).toBeInTheDocument();
});
