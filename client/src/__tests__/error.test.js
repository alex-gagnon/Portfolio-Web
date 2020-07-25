import React from 'react';
import { render } from '@testing-library/react';
import { Error } from '../components/pages';

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "localhost:8080/test_error"
    })
}))

test('should render error page h2 header', () => {
    const location = { pathname: "/error" }
    const { getByText } = render(<Error location={ location }/>)
    const textElement = getByText("No match for")
    const locationElement = getByText("/error")
    expect(textElement).toBeInTheDocument()
    expect(locationElement).toBeInTheDocument()
})