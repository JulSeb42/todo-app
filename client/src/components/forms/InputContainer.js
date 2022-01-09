// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XXS};
`

const Label = styled.label`
    color: ${Variables.ThemeColors.Link};
    font-weight: ${Variables.FontWeights.Black};
`

function InputContainer(props) {
    return (
        <Container>
            {props.label && <Label htmlFor={props.id}>{props.label}</Label>}

            {props.children}
        </Container>
    )
}

export default InputContainer
