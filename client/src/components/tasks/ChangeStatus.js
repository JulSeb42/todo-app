// Packages
import React from "react"
import axios from "axios"

// Components
import SelectorInput from "../forms/SelectorInput"
import ListTags from "./ListTags"

function ChangeStatus({ edited, setEdited, ...props }) {
    const handleTodo = e => {
        const requestBody = { status: "todo" }

        if (e.target.checked) {
            axios
                .put(`/tasks/task/${props.task._id}/change-status`, requestBody)
                // .then(() => window.location.reload(false))
                .catch(err => console.log(err))
        }
    }

    const handleDoing = e => {
        const requestBody = { status: "doing" }

        if (e.target.checked) {
            axios
                .put(`/tasks/task/${props.task._id}/change-status`, requestBody)
                // .then(() => window.location.reload(false))
                .catch(err => console.log(err))
        }
    }

    const handleDone = e => {
        const requestBody = { status: "done" }

        if (e.target.checked) {
            axios
                .put(`/tasks/task/${props.task._id}/change-status`, requestBody)
                // .then(() => window.location.reload(false))
                .catch(err => console.log(err))
        }
    }

    return (
        <ListTags>
            <SelectorInput
                label="To do"
                type="radio"
                id={`todo-${props.index}`}
                name={`status-${props.index}`}
                defaultChecked={props.task.status === "todo" && true}
                onChange={handleTodo}
            />

            <SelectorInput
                label="Doing"
                type="radio"
                id={`doing-${props.index}`}
                name={`status-${props.index}`}
                defaultChecked={props.task.status === "doing" && true}
                onChange={handleDoing}
            />

            <SelectorInput
                label="Done"
                type="radio"
                id={`done-${props.index}`}
                name={`status-${props.index}`}
                defaultChecked={props.task.status === "done" && true}
                onChange={handleDone}
            />
        </ListTags>
    )
}

export default ChangeStatus
