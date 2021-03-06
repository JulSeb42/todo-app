// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${Variables.Margins.S};
    }
`

export default ButtonsContainer
