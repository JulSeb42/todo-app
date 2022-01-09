// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const TitleFlex = styled.div`
    display: flex;
    justify-content: space-between;

    h1,
    h2,
    h3,
    h4,
    h5 {
        flex-grow: 1;
        margin-right: ${Variables.Margins.S};
    }

    @media ${Variables.Breakpoints.Mobile} {
        display: grid;
        grid-template-columns: 1fr;
        gap: ${Variables.Margins.S};

        & > * {
            justify-self: start;
        }
    }
`

export default TitleFlex
