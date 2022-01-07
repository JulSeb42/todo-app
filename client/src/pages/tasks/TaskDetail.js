// Packages
import React from "react"

// Components
import Page from "../../components/layouts/Page"
import Button from "../../components/ui/Button"
import ChangeStatus from "../../components/tasks/ChangeStatus"

// Utils
import convertDate from "../../components/utils/convertDate"

function TaskDetail({ edited, setEdited, ...props }) {
    return (
        <Page title={props.task.title}>
            <h1>{props.task.title}</h1>

            <Button to={`/tasks/${props.task._id}/edit`}>Edit</Button>

            <ChangeStatus task={props.task} edited={edited} setEdited={setEdited} />

            {props.task.tags.length > 0 && (
                <ul>
                    {props.task.tags.map((tag, i) => (
                        <li key={i}>
                            {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </li>
                    ))}
                </ul>
            )}

            {props.task.date && (
                <small>
                    {convertDate(props.task.date)}
                    {props.task.time && ` at ${props.task.time}`}
                </small>
            )}

            {props.task.description && <p>{props.task.description}</p>}
        </Page>
    )
}

export default TaskDetail
