import { render, screen } from '@testing-library/react';
import App from './';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/Breacher::MongoDb/i);
  expect(titleElement).toBeInTheDocument();
});