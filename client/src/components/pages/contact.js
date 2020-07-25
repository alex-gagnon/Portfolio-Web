import React, { Component } from "react"
import Button from "react-bootstrap/Button"

const Contact = () => (
    <div>
        <div>
            <h2>If you'd like to get in touch, please feel free to...</h2>
        </div>
        <div>
            <Button href="mailto:admin@alex-gagnon.com" size="lg">Send me an email!</Button>
        </div>
    </div>
)
export default Contact