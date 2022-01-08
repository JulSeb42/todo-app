// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Tag = styled.span`
    padding: ${Variables.Margins.XXS} ${Variables.Margins.XS};
    background-color: ${Variables.ThemeColors.LighterGray};
    color: ${Variables.ThemeColors.Black};
    border-radius: ${Variables.Radii.S};
    font-size: ${Variables.FontSizes.Label};
`

export default Tag
