import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/pages/Home';


describe('renders home page without api connection', () => {
    test('renders home page h2 header', () => {
        const { getByText } = render(<Home />)
        const textElement = getByText("I cannot do that. I'll have to send in a maintenance request.")
        expect(textElement).toBeInTheDocument()
    })
})
