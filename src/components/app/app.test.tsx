import { render, screen } from '@testing-library/react';
import { App } from './app.component';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/Breacher::MongoDb/i);
  expect(titleElement).toBeInTheDocument();
});
