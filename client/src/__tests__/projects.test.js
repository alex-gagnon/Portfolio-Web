import React from 'react';
import { render } from '@testing-library/react';
<<<<<<< HEAD
import Projects from '../components/pages/projects';


describe('renders projects page without api connection', () => {
    test('renders projects page h2 header', () => {
=======
import { Projects } from '../components/pages';


describe('should render projects page without api connection', () => {
    test('should render projects page h2 header', () => {
>>>>>>> 51ea0120e61ada5cfcaaae687e1736057713156a
        const { getByText } = render(<Projects />)
        const textElement = getByText("I'm H.O.W.A.R.D, it's my job to keep you alive.")
        expect(textElement).toBeInTheDocument()
    })
})
