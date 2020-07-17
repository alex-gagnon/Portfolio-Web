import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';


function verifyTextInDocument(text) {
  const { getByText } = render(<App />);
  const textElement = getByText(text);
  expect(textElement).toBeInTheDocument();
}

test('renders app offline when api is unavailable', () => {
  verifyTextInDocument(/APP OFFLINE/i)
})

test('renders testing quote when api is unavailable', () => {
  verifyTextInDocument(/Testing Quote/i)
})

test('renders testing author when api is unavailable', () => {
  verifyTextInDocument(/Testing Author/i)
})
