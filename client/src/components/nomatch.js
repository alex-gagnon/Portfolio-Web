import React from 'react'

// Simple bad route error page
const NoMatch = ({ location }) => (
    <h3>No match for <code>{location.pathname}</code></h3>
)

export default NoMatch