// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

export const TabList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${Variables.Margins.L};
    position: relative;

    &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        z-index: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${Variables.ThemeColors.LighterGray};
    }
`

export const TabButton = styled.button`
    border: none;
    background: none;
    padding: 0;
    text-align: left;
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamily};
    font-weight: ${Variables.FontWeights.Black};
    position: relative;
    color: ${Variables.ThemeColors.Font};

    &:after {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        z-index: 1;
        background-color: transparent;
        bottom: -2px;
        left: 0;
    }

    &.active:after {
        background-color: ${Variables.ThemeColors.Primary};
    }
`
