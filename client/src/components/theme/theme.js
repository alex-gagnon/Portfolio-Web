import React, { Component } from "react"
import './theme.css'
import ToggleButton from "react-bootstrap/ToggleButton"
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup"


class Theme extends Component {
    constructor(props) {
        super(props)

        this.toggleTheme = this.toggleTheme.bind(this)
    }

    toggleTheme = () => {
        let theme = document.getElementById("Theme-container")
        let currentTheme = theme.className
        theme.className = currentTheme === "dark-mode" ? "light-mode" : "dark-mode"
    }

    componentDidMount() {
        this.toggleTheme()
    }

    render() {
        return (
            <ToggleButtonGroup id="toggle-btn__group" type="radio" name="theme-options" defaultValue="toggle-dark" onChange={this.toggleTheme}>            
                <ToggleButton id="toggle-btn__light" variant="outline-light" value="toggle-light">
                    Light
                </ToggleButton>
                <ToggleButton id="toggle-btn__dark" variant="outline-secondary" value="toggle-dark" style={{ "color": "white" }}>
                    Dark
                </ToggleButton>
            </ToggleButtonGroup>
        )
    }
}

export default Theme