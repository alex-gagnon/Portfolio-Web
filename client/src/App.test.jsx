import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';


test('renders hey there opener', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Hey there/i);
  expect(textElement).toBeInTheDocument();
})

test('renders intro tab', () => {  
  const { getByText } = render(<App />);
  const tabElement = getByText("INTRO");
  expect(tabElement).toBeInTheDocument();
})

test('renders projects tab', () => {
  const { getByText } = render(<App />);
  const tabElement = getByText("PROJECTS");
  expect(tabElement).toBeInTheDocument();
})

test('renders more tab', () => {
  const { getByText } = render(<App />);
  const tabElement = getByText("MORE");
  expect(tabElement).toBeInTheDocument();
})

test('renders projects text when clicked', () => {
  const { getByText } = render(<App />);
  const tabElement = getByText("PROJECTS");
  tabElement.click();
  const monkeText = getByText(/Monk-E/i);
  const mdText = getByText(/Markdown Previewer/i);
  expect(monkeText).toBeInTheDocument(); 
  expect(mdText).toBeInTheDocument();
})

test('renders more text when clicked', () => {
  const { getByText } = render(<App />);
  const tabElement = getByText("MORE");
  tabElement.click();
  const textElement = getByText(/My portfolio is currently undergoing a redesign/i);
  expect(textElement).toBeInTheDocument();
})
