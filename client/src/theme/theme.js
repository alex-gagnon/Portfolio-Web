import React from "react"
import './theme.css'

const toggleTheme = () => {
    let theme = document.getElementById("Theme-container");
    let currentTheme = theme.className;
    theme.className = currentTheme === "dark-mode" ? "light-mode" : "dark-mode";
}

const Theme = () => (
    <button type="button" name="dark_light" onClick={toggleTheme} title="Toggle theme" class="toggle-btn" >
        Toggle theme
    </button>
)

export default Theme