import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial status text', () => {
  render(<App />);
  const statusEl = screen.getByText(/Next: X/i);
  expect(statusEl).toBeInTheDocument();
});
