// Packages
import React from "react"
import { func, string } from "prop-types"
// import styled from "styled-components"

// Components
import Icon from "../ui/Icon"

function ToggleTheme({ theme, toggleTheme, ...props }) {
    const isLight = theme === "Light"

    return (
        <button onClick={toggleTheme} {...props}>
            <Icon
                name={isLight ? "moon" : "sun"}
                color="currentColor"
                size={12}
            />

            {isLight ? "Dark" : "Light"} theme
        </button>
    )
}

ToggleTheme.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default ToggleTheme
