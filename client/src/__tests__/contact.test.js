import React from 'react';
import { render } from '@testing-library/react';
<<<<<<< HEAD
import Contact from '../components/pages/contact';


test('renders contact page h2 header', () => {
=======
import { Contact } from '../components/pages';


test('should render contact page h2 header', () => {
>>>>>>> 51ea0120e61ada5cfcaaae687e1736057713156a
    const { getByText } = render(<Contact />)
    const textElement = getByText("If you'd like to get in touch, please feel free to...")
    expect(textElement).toBeInTheDocument()
})

<<<<<<< HEAD
test('renders contact page email button', () => {
=======
test('should render contact page email button', () => {
>>>>>>> 51ea0120e61ada5cfcaaae687e1736057713156a
    const { getByText } = render(<Contact />)
    const textElement = getByText('Send me an email!')
    expect(textElement).toBeInTheDocument()
})
