// Packages
import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.button`
    border: none;
    background: none;
    transition: ${Variables.Transitions.Short};
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamily};
    font-weight: ${Variables.FontWeights.Black};
    padding: 0;
    text-decoration: none;

    ${props =>
        props.btnstyle === "primary" &&
        css`
            background-color: ${Variables.ThemeColors.Primary};
            color: ${Variables.ThemeColors.White};
            padding: ${Variables.Margins.XS} ${Variables.Margins.S};
            border-radius: ${Variables.Radii.M};

            &:hover {
                background-color: ${Variables.ThemeColors.Primary70};
            }
        `}

    ${props =>
        props.btnstyle === "secondary" &&
        css`
            color: ${Variables.ThemeColors.Link};

            &:hover {
                color: ${Variables.ThemeColors.Primary70};
            }
        `}

    ${props =>
        props.btnstyle === "danger" &&
        css`
            background-color: ${Variables.ThemeColors.Danger};
            color: ${Variables.ThemeColors.White};
            padding: ${Variables.Margins.XS} ${Variables.Margins.S};
            border-radius: ${Variables.Radii.M};

            &:hover {
                background-color: ${Variables.ThemeColors.Danger70};
            }
        `}
    
    ${props =>
        props.btnstyle === "secondary-danger" &&
        css`
            color: ${Variables.ThemeColors.Primary};

            &:hover {
                color: ${Variables.ThemeColors.Primary70};
            }
        `}
    
    ${props =>
        props.justify &&
        css`
            justify-self: ${props => props.justify};
        `}
`

function Button(props) {
    return (
        <Container as={props.to && Link} {...props}>
            {props.children}
        </Container>
    )
}

export default Button
