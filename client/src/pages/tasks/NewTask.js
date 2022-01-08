// Packages
import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"

// Utils
import getToday from "../../components/utils/getToday"

// title, date, time, description, tags, status, user

function NewTask({ edited, setEdited }) {
    const { user, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState([])

    const handleTitle = e => setTitle(e.target.value)
    const handleDate = e => setDate(e.target.value)
    const handleTime = e => setTime(e.target.value)
    const handleDescription = e => setDescription(e.target.value)
    const handleTags = e => setTags(e.target.value.split(","))

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            title,
            date,
            time,
            description,
            tags,
            status: "todo",
            user: user._id,
        }

        axios.put("/tasks/new-task", requestBody).then(res => {
            const { user } = res.data
            console.log(res)
            // console.log(user)
            updateUser(user)
            setEdited(!edited)
            navigate(`/tasks/${res.data.createdTask._id}`)
            // window.location.reload(false)
        }).catch(err => console.log(err))
    }

    return (
        <Page title="New task">
            <Font.H1>Create a new task</Font.H1>

            <Form
                btnprimary="Create a task"
                btncancel="/"
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
        </Page>
    )
}

export default NewTask
