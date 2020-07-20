import React from "react"
import './theme.css'
import ToggleButton from "react-bootstrap/ToggleButton"
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup"

const toggleTheme = () => {
    let theme = document.getElementById("Theme-container")
    let currentTheme = theme.className
    theme.className = currentTheme === "dark-mode" ? "light-mode" : "dark-mode"
}

const Theme = () => (
    <ToggleButtonGroup type="radio" name="theme-options" defaultValue="toggle-light" onChange={toggleTheme}>            
        <ToggleButton id="toggle-btn__light" variant="outline-light" value="toggle-light">
            Light
        </ToggleButton>
        <ToggleButton id="toggle-btn__dark" variant="outline-secondary" value="toggle-dark" style={{ "color": "white" }}>
            Dark
        </ToggleButton>
    </ToggleButtonGroup>
)

export default Theme