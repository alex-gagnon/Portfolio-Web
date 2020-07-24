import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/pages/Home';


describe('should render home page without api connection', () => {
    test('should render home page h2 header', () => {
        const { getByText } = render(<Home />)
        const textElement = getByText("I cannot do that. I'll have to send in a maintenance request.")
        expect(textElement).toBeInTheDocument()
    })
})
