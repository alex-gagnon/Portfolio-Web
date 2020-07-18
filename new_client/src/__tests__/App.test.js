import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders loading text', () => {
  const { getByText } = render(<App />)
  const textElement = getByText(/fetching data/i)
  expect(textElement).toBeInTheDocument()
})
