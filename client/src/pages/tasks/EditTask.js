// Packages
import React from "react"

// Components
import Page from "../../components/layouts/Page"

function EditTask(props) {
    return (
        <Page title={`Edit ${props.task.title}`}>
            <h1>Edit {props.task.title}</h1>
        </Page>
    )
}

export default EditTask
