// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

const Error = styled(Font.P)`
    width: 100%;
    padding: ${Variables.Margins.M};
    background: ${Variables.ThemeColors.Danger10};
    border: 1px solid ${Variables.ThemeColors.Danger};
    border-radius: ${Variables.Radii.M};
    color: ${Variables.ThemeColors.ErrorFont};
`

export default Error
