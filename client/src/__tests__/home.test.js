import React from 'react';
import { render } from '@testing-library/react';
<<<<<<< HEAD
import Home from '../components/pages/Home';


describe('renders home page without api connection', () => {
    test('renders home page h2 header', () => {
=======
import { Home } from '../components/pages';


describe('should render home page without api connection', () => {
    test('should render home page h2 header', () => {
>>>>>>> 51ea0120e61ada5cfcaaae687e1736057713156a
        const { getByText } = render(<Home />)
        const textElement = getByText("I cannot do that. I'll have to send in a maintenance request.")
        expect(textElement).toBeInTheDocument()
    })
})
