// Packages
import styled from "styled-components"

// Components
import { IconMixin } from "../ui/Icon"
import * as Variables from "./Variables"

// Styles
export const H1 = styled.h1`
    font-size: ${Variables.FontSizes.TitleLarge};
    font-weight: ${Variables.FontWeights.Black};
`

export const H2 = styled.h2`
    font-size: ${Variables.FontSizes.TitleMedium};
    font-weight: ${Variables.FontWeights.Black};
`

export const H3 = styled.h3`
    font-size: ${Variables.FontSizes.TitleMedium};
    font-weight: ${Variables.FontWeights.Bold};
`

export const H4 = styled.h4`
    font-size: ${Variables.FontSizes.TitleSmall};
    font-weight: ${Variables.FontWeights.Black};
`

export const H5 = styled.h5`
    font-size: ${Variables.FontSizes.TitleSmall};
    font-weight: ${Variables.FontWeights.Bold};
`

export const H6 = styled.h6`
    font-size: ${Variables.FontSizes.TitleSmall};
    font-weight: ${Variables.FontWeights.Black};
`

export const Subtitle = styled.small`
    font-size: ${Variables.FontSizes.Label};
    font-style: italic;
    color: ${Variables.ThemeColors.Gray};
`

export const P = styled.p`
    font-size: ${Variables.FontSizes.Body};

    a {
        color: ${Variables.ThemeColors.Link};
        text-decoration: none;
        font-weight: ${Variables.FontWeights.Black};
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.ThemeColors.Primary70};
        }
    }
`

export const Strong = styled.strong`
    font-weight: ${Variables.FontWeights.Bold};
`

export const Em = styled.em`
    font-style: italic;
`

export const List = styled.ul`
    padding: 0;
    margin: 0;
    font-size: ${Variables.FontSizes.Body};
    padding-left: calc(${Variables.Margins.M} - 2px);

    li {
        --icon-size: 8px;
        display: grid;
        grid-template-columns: var(--icon-size) 1fr;
        gap: ${Variables.Margins.XXS};

        &:before {
            ${IconMixin({
                icon: "chevron-right-solid",
                size: "var(--icon-size)",
                color: "currentColor",
            })}
            margin-top: calc(16px / 2 - 2px);
        }

        &:not(:last-child) {
            margin-bottom: ${Variables.Margins.XS};
        }
    }
`
