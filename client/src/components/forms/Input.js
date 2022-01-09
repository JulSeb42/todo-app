// Packages
import React, { useState } from "react"
import styled, { css } from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Icon from "../ui/Icon"
import InputContainer from "./InputContainer"

// Styles
const InputStyled = styled.input`
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

    &:focus {
        border-color: ${Variables.ThemeColors.Primary};
        outline: none;
    }

    &:disabled {
        background-color: ${Variables.ThemeColors.LightGray};
        color: ${Variables.ThemeColors.Gray};
        cursor: not-allowed;
    }

    ${props =>
        props.inputtype === "textarea" &&
        css`
            height: calc(
                ${Variables.Margins.XXS} * 2 + ${Variables.FontSizes.Body} *
                    ${Variables.LineHeight} * 5
            );
        `}
`

const Password = styled.div`
    position: relative;
`

const Button = styled.button`
    border: none;
    background: none;
    padding: 0;
    --size: 29px;
    width: var(--size);
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: ${Variables.Margins.XS};
    top: 0;
    z-index: 2;
`

function Input(props) {
    const [isVisible, setIsVisible] = useState(false)
    const visible = isVisible ? "text" : "password"

    return (
        <InputContainer label={props.label} id={props.id}>
            {props.inputtype === "password" ? (
                <Password>
                    <InputStyled
                        id={props.id}
                        name={props.name || props.id}
                        type={visible}
                        {...props}
                    />

                    <Button
                        type="button"
                        onClick={() => setIsVisible(!isVisible)}
                        aria-label="Hide / Show password"
                    >
                        <Icon
                            name={isVisible ? "show" : "show-slash"}
                            size={24}
                            color={Variables.ThemeColors.Link}
                        />
                        {/* {isVisible ? "Hide" : "Show"} password */}
                    </Button>
                </Password>
            ) : props.inputtype === "textarea" ? (
                <InputStyled
                    as="textarea"
                    id={props.id}
                    name={props.name || props.id}
                    {...props}
                />
            ) : (
                <InputStyled
                    id={props.id}
                    name={props.name || props.id}
                    {...props}
                />
            )}

            {props.helper && <Font.Subtitle>{props.helper}</Font.Subtitle>}
        </InputContainer>
    )
}

export default Input
