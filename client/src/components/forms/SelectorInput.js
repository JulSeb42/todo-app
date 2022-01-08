// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.span`
    input {
        display: none;
    }

    input:checked ~ label {
        background-color: ${Variables.ThemeColors.Primary};
        color: ${Variables.ThemeColors.White};
    }
`

const Label = styled.label`
    background-color: ${Variables.ThemeColors.LighterGray};
    border-radius: ${Variables.Radii.Round};
    padding: ${Variables.Margins.XXS} ${Variables.Margins.S};
    cursor: pointer;
    transition: ${Variables.Transitions.Short};
    box-sizing: border-box;
    display: inline-block;
    color: ${Variables.ThemeColors.Black};

    &:hover {
        background-color: ${Variables.ThemeColors.Primary70};
        color: ${Variables.ThemeColors.White};
    }
`

function SelectorInput(props) {
    return (
        <Container>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                {...props}
            />

            <Label htmlFor={props.id}>{props.label}</Label>
        </Container>
    )
}

export default SelectorInput
