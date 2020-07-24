import React from 'react'

// Simple bad route error page
const Error = ({ location }) => (
    <h2>No match for <code>{location.pathname}</code></h2>
)

export default Error