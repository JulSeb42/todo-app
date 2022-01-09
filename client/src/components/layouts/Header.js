// Packages
import React, { useContext, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"

// Components
import { AuthContext } from "../../context/auth"
import ToggleTheme from "../utils/ToggleTheme"
import * as Variables from "../styles/Variables"

// Data
import SiteData from "../data/SiteData"

// Styles
const Container = styled.header`
    width: 100%;
    padding: ${Variables.Margins.L} 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Variables.ThemeColors.Primary};
    position: relative;

    a,
    button {
        color: ${Variables.ColorsCommon.White};
        text-decoration: none;
        font-family: ${Variables.FontFamily};
        font-size: ${Variables.FontSizes.Body};
    }
`

const Logo = styled(Link)`
    font-weight: ${Variables.FontWeights.Black};
`

const Nav = styled.nav`
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${Variables.Margins.M};
    }

    @media ${Variables.Breakpoints.Mobile} {
        position: absolute;
        width: 100vw;
        left: 0;
        top: -200px;
        flex-direction: column;
        align-items: flex-start;
        background-color: ${Variables.ThemeColors.Primary};
        padding: ${Variables.Margins.XS} 5vw;
        transition: ${Variables.Transitions.Short};
        z-index: 999;

        & > *:not(:last-child) {
            margin-right: 0;
            margin-bottom: ${Variables.Margins.M};
        }

        &.open {
            top: 68px;
        }

        .button-drawer {
            display: none;
        }
    }
`

const StyledLink = styled(NavLink)`
    border: none;
    padding: 0;
    background: none;
    position: relative;
    display: flex;
    align-items: center;

    &:before {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        transition: ${Variables.Transitions.Bezier};
        background-color: ${Variables.ColorsCommon.White};
    }

    &:hover:before {
        width: 100%;
    }

    & > span {
        margin-right: ${Variables.Margins.XXS};
    }

    &.active {
        font-weight: ${Variables.FontWeights.Black};
    }
`

const Separator = styled.span`
    display: inline-block;
    width: 2px;
    height: ${Variables.FontSizes.Body};
    background-color: ${Variables.ColorsCommon.White};

    @media ${Variables.Breakpoints.Mobile} {
        height: 2px;
        width: 100%;
    }
`

const Drawer = styled.div`
    position: absolute;
    top: 90%;
    background-color: ${Variables.ThemeColors.Primary};
    right: calc(5vw + 99px + ${Variables.Margins.M});
    margin-right: 0 !important;
    padding: 0 ${Variables.Margins.S};
    border-radius: ${Variables.Radii.M};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
    max-height: 0;
    overflow: hidden;
    transition: ${Variables.Transitions.Short};

    a,
    button {
        margin-right: 0;
    }

    &.open {
        max-height: 300px;
        padding: ${Variables.Margins.S} ${Variables.Margins.S};
    }

    @media ${Variables.Breakpoints.Mobile} {
        position: relative;
        max-height: inherit;
        top: 0;
        right: 0;
        padding: 0;
    }
`

const Burger = styled.button`
    width: 30px;
    height: 20px;
    background: none;
    border: none;
    padding: 0;
    position: relative;
    display: none;

    span {
        width: 100%;
        height: 2px;
        background-color: ${Variables.ThemeColors.White};
        position: absolute;
        left: 0;
        transition: ${Variables.Transitions.Short};

        &:first-child {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - 2px / 2);
        }

        &:last-child {
            bottom: 0;
        }
    }

    &.open span {
        --position: 1;
        &:first-child {
            transform: rotate(45deg);
            top: var(--position);
        }

        &:nth-child(2) {
            width: 0;
        }

        &:last-child {
            transform: rotate(-45deg);
            bottom: var(--position);
        }
    }

    @media ${Variables.Breakpoints.Mobile} {
        display: block;
    }
`

function Header(props) {
    const { logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)

    const open = isOpen ? "open" : ""

    // Burger
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)
    const burgerOpen = isBurgerOpen ? "open" : ""

    const handleBurger = () => {
        setIsBurgerOpen(!isBurgerOpen)
    }

    const handleLogout = () => {
        logoutUser()
        navigate("/login")
        setIsBurgerOpen(false)
    }

    return (
        <Container>
            <Logo to="/">{SiteData.Name}</Logo>

            <Burger
                aria-label="Open / Close menu"
                onClick={handleBurger}
                className={burgerOpen}
            >
                <span />
                <span />
                <span />
            </Burger>

            <Nav className={burgerOpen} onClick={() => setIsBurgerOpen(false)}>
                <StyledLink to="/">Home</StyledLink>

                <StyledLink
                    as="button"
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setIsOpen(false)}
                    className="button-drawer"
                >
                    My account
                </StyledLink>

                <Drawer className={open} onClick={() => setIsOpen(false)}>
                    <StyledLink to="/edit-account">
                        Edit your account
                    </StyledLink>
                    <StyledLink as="button" onClick={handleLogout}>
                        Log out
                    </StyledLink>
                </Drawer>

                <Separator />

                <StyledLink
                    as={ToggleTheme}
                    theme={props.theme}
                    toggleTheme={props.toggleTheme}
                />
            </Nav>
        </Container>
    )
}

export default Header
