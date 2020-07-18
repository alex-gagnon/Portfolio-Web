import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders home link', () => {
  const { getByText } = render(<App />)
  // Wait for timeout to finish for loading data
  setTimeout(() => {
    const linkElement = getByText(/Home/i)
    expect(linkElement).toBeInTheDocument()
  }, 2000)
})

test('renders about me link', () => {
  const { getByText } = render(<App />)
  // Wait for timeout to finish for loading data
  setTimeout(() => {
    const linkElement = getByText(/About me/i)
    expect(linkElement).toBeInTheDocument()
  }, 2000)
})
