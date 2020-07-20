import React from "react"
import './theme.css'

const toggleTheme = () => {
    let theme = document.getElementById("Theme-container");
    let currentTheme = theme.className;
    theme.className = currentTheme === "dark-mode" ? "light-mode" : "dark-mode";

    let toggleBtn = document.getElementById("toggle-btn")
    toggleBtn.className = currentTheme === "dark-mode" ? "on" : "off"
}

const Theme = () => (
    <div class="toggle-container"> 
        <button id="toggle-btn" className="light-mode" type="button" name="dark_light" onClick={toggleTheme} title="Toggle theme">
            <span id="toggle-btn__slider"></span>
        </button>
    </div>
)

export default Theme