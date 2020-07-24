import React from 'react';
import { render } from '@testing-library/react';
import Projects from '../components/pages/projects';


describe('renders projects page without api connection', () => {
    test('renders projects page h2 header', () => {
        const { getByText } = render(<Projects />)
        const textElement = getByText("I'm H.O.W.A.R.D, it's my job to keep you alive.")
        expect(textElement).toBeInTheDocument()
    })
})
