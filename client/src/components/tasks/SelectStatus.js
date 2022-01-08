// Packages
import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.select`
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
    cursor: pointer;

    &:focus {
        border-color: ${Variables.ThemeColors.Primary};
        outline: none;
    }
`

function SelectStatus(props) {
    const [status] = useState(props.task.status)

    const handleChange = e => {
        e.preventDefault()

        const requestBody = { status: e.target.value }

        axios
            .put(`/tasks/task/${props.task._id}/change-status`, requestBody)
            .then(() => window.location.reload(false))
            .catch(err => console.log(err))
    }

    return (
        <Container value={status} onChange={handleChange}>
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
        </Container>
    )
}

export default SelectStatus
