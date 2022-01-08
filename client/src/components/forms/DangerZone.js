// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import ButtonsContainer from "./ButtonsContainer"
import Button from "../ui/Button"
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    width: 100%;
    padding: ${Variables.Margins.M};
    background: ${Variables.ThemeColors.Danger10};
    border: 1px solid ${Variables.ThemeColors.Danger};
    border-radius: ${Variables.Radii.M};
    color: ${Variables.ThemeColors.ErrorFont};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
`

function DangerZone(props) {
    const [isOpen, setIsOpen] = useState(false)
    const open = isOpen ? "grid" : "none"
    const visible = isOpen ? "none" : "block"

    return (
        <>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                style={{ display: visible }}
                justify="start"
                btnstyle="danger"
            >
                {props.btnOpen}
            </Button>

            <Container style={{ display: open }} {...props}>
                <Font.P>{props.text}</Font.P>

                <ButtonsContainer>
                    <Button
                        onClick={props.onClickPrimary}
                        btnstyle="danger"
                        type="button"
                    >
                        {props.btnConfirm}
                    </Button>

                    <Button
                        onClick={() => setIsOpen(!isOpen)}
                        btnstyle="secondary-danger"
                        type="button"
                    >
                        No, cancel
                    </Button>
                </ButtonsContainer>
            </Container>
        </>
    )
}

export default DangerZone
