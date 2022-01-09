// Packages
import React from "react"

// Components
import Container from "./FilterContainer"
import Input from "../forms/Input"
import Select from "../forms/Select"

function Filters(props) {
    return (
        <Container>
            <Input
                label="Search by title"
                id="title"
                onChange={props.onChangeSearch}
                value={props.valueSearch}
            />

            <Select label="Filter by tags">
                <option>1</option>
            </Select>
        </Container>
    )
}

export default Filters
