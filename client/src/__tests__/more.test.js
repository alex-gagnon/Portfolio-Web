import React from 'react';
import { render } from '@testing-library/react';
<<<<<<< HEAD
import More from '../components/pages/more';


describe('renders more page without api connection', () => {
    test('renders more page h2 header', () => {
=======
import { More } from '../components/pages';


describe('should render more page without api connection', () => {
    test('should render more page h2 header', () => {
>>>>>>> 51ea0120e61ada5cfcaaae687e1736057713156a
        const { getByText } = render(<More />)
        const textElement = getByText("I do not have that information.")
        expect(textElement).toBeInTheDocument()
    })
})
