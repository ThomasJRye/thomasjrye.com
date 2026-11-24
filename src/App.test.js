import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage greeting and CV link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Hi, I'm Thomas.");
  expect(screen.getAllByRole('link', { name: 'CV' }).length).toBeGreaterThan(0);
});
