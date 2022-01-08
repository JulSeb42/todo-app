// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const ListTags = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: ${Variables.Margins.XS};
    justify-content: start;
`

export default ListTags
