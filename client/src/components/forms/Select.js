// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import InputContainer from "./InputContainer"
import { IconMixin } from "../ui/Icon"

// Styles
const SelectContainer = styled.div`
    position: relative;
    width: 100%;

    &:after {
        ${IconMixin({
            icon: "chevron-down",
            size: 24,
            color: Variables.ThemeColors.Primary,
        })}
        position: absolute;
        z-index: 2;
        top: calc(50% - 24px / 2);
        right: ${Variables.Margins.XXS};
    }
`

const Input = styled.select`
    width: 100%;
    position: relative;
    z-index: 1;
    padding: ${Variables.Margins.XXS} ${Variables.Margins.XS};
    font-size: ${Variables.FontSizes.Body};
    line-height: ${Variables.LineHeight};
    font-family: ${Variables.FontFamily};
    border-radius: ${Variables.Radii.S};
    border: 1px solid ${Variables.ThemeColors.LightGray};
    background-color: ${Variables.ThemeColors.Background};
    color: ${Variables.ThemeColors.Font};
    appearance: none;
    cursor: pointer;

    &::-ms-expand {
        display: none;
    }

    &:focus {
        border-color: ${Variables.ThemeColors.Primary};
        outline: none;
    }
`

function Select(props) {
    return (
        <InputContainer label={props.label} id={props.id}>
            <SelectContainer>
                <Input id={props.id} name={props.name || props.id} {...props}>
                    {props.children}
                </Input>
            </SelectContainer>
        </InputContainer>
    )
}

export default Select
