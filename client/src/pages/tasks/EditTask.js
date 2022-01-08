// Packages
import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import DangerZone from "../../components/forms/DangerZone"

// Utils
import getToday from "../../components/utils/getToday"

function EditTask({ edited, setEdited, ...props }) {
    const navigate = useNavigate()

    const [title, setTitle] = useState(props.task.title)
    const [date, setDate] = useState(props.task.date)
    const [time, setTime] = useState(props.task.time)
    const [description, setDescription] = useState(props.task.description)
    const [tags, setTags] = useState(props.task.tags)

    const handleTitle = e => setTitle(e.target.value)
    const handleDate = e => setDate(e.target.value)
    const handleTime = e => setTime(e.target.value)
    const handleDescription = e => setDescription(e.target.value)
    const handleTags = e => setTags(e.target.value.split(","))

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = { title, date, time, description, tags }

        axios
            .put(`/tasks/task/${props.task._id}/edit`, requestBody)
            .then(() => {
                setEdited(!edited)
                navigate(`/tasks/${props.task._id}`)
            })
    }

    const handleDelete = () => {
        axios
            .delete(`/tasks/task/${props.task._id}/delete`)
            .then(() => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <Page title={`Edit ${props.task.title}`}>
            <Font.H1>Edit {props.task.title}</Font.H1>

            <Form
                btnprimary="Save changes"
                btncancel={`/tasks/${props.task._id}`}
                onSubmit={handleSubmit}
            >
                <Input
                    label="Title"
                    id="title"
                    onChange={handleTitle}
                    value={title}
                />

                <Input
                    label="Date"
                    type="date"
                    id="date"
                    min={getToday()}
                    onChange={handleDate}
                    value={date}
                />

                <Input
                    label="Time"
                    type="time"
                    id="time"
                    onChange={handleTime}
                    value={time}
                />

                <Input
                    label="Description"
                    inputtype="textarea"
                    id="description"
                    onChange={handleDescription}
                    value={description}
                />

                <Input
                    label="Tags"
                    id="tags"
                    onChange={handleTags}
                    value={tags}
                    helper="Please separate all your tags with a comma."
                />
            </Form>

            <DangerZone
                onClickPrimary={handleDelete}
                btnOpen={`Delete ${props.task.title}`}
                text={`Are you sure you want to delete ${props.task.title}?`}
                btnConfirm="Yes, delete the task"
            />
        </Page>
    )
}

export default EditTask
