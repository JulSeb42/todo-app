// Packages
import { createGlobalStyle } from "styled-components"

// Components
import * as Variables from "./Variables"

// Styles
const GlobalStyles = createGlobalStyle`
    html,
    body {
        background-color: ${Variables.ThemeColors.Background};
        color: ${Variables.ThemeColors.Font};
        transition: ${Variables.Transitions.Short};
        font-family: ${Variables.FontFamily};
    }
`

export default GlobalStyles