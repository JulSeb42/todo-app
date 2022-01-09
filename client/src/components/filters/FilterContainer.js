// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Button from "../ui/Button"

// Styles
const Wrapper = styled.div`
    width: 100%;
    padding: ${Variables.Margins.M};
    border: 1px solid ${Variables.ThemeColors.LighterGray};
    border-radius: ${Variables.Radii.M};
    display: none;

    &.open {
        display: grid;
    }
`

function Container(props) {
    const [isOpen, setIsOpen] = useState(false)
    const open = isOpen ? "open" : ""
    const visible = isOpen ? "none" : "inline"

    return (
        <>
            <Button
                btnstyle="secondary"
                justify="start"
                onClick={() => setIsOpen(true)}
                style={{ display: visible }}
            >
                Filters
            </Button>

            <Wrapper className={open}>
                {props.children}

                <Button
                    btnstyle="secondary"
                    justify="start"
                    onClick={() => setIsOpen(false)}
                >
                    Close
                </Button>
            </Wrapper>
        </>
    )
}

export default Container
