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
`

function Header(props) {
    const { logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logoutUser()
        navigate("/login")
    }

    const [isOpen, setIsOpen] = useState(false)

    const open = isOpen ? "open" : ""

    return (
        <Container>
            <Logo to="/">{SiteData.Name}</Logo>

            <Nav>
                <StyledLink to="/">Home</StyledLink>

                <StyledLink as="button" onClick={() => setIsOpen(!isOpen)}>
                    My account
                </StyledLink>

                <Drawer className={open} onClick={() => setIsOpen(!isOpen)}>
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
