import React from 'react';
import { render } from '@testing-library/react';
import { Contact } from '../components/pages';


test('should render contact page h2 header', () => {
    const { getByText } = render(<Contact />)
    const textElement = getByText("If you'd like to get in touch, please feel free to...")
    expect(textElement).toBeInTheDocument()
})

test('should render contact page email button', () => {
    const { getByText } = render(<Contact />)
    const textElement = getByText('Send me an email!')
    expect(textElement).toBeInTheDocument()
})
