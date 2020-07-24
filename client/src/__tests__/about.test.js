import React from 'react';
import { render } from '@testing-library/react';
import { About } from '../components/pages';


test('should render about page h2 header', () => {
    const { getByText } = render(<About />)
    const textElement = getByText("I'm not authorized to tell you that.")
    expect(textElement).toBeInTheDocument()
})