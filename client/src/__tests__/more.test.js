import React from 'react';
import { render } from '@testing-library/react';
import More from '../components/pages/more';


describe('renders more page without api connection', () => {
    test('renders more page h2 header', () => {
        const { getByText } = render(<More />)
        const textElement = getByText("I do not have that information.")
        expect(textElement).toBeInTheDocument()
    })
})
