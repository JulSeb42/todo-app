// Packages
import React, { useContext, useState, useEffect } from "react"
import axios from "axios"

// Components
import { AuthContext } from "../context/auth"
import * as Font from "../components/styles/Font"
import Page from "../components/layouts/Page"
import Button from "../components/ui/Button"
import TitleFlex from "../components/ui/TitleFlex"
import List from "../components/tasks/List"
import Card from "../components/tasks/Card"

// Utils
import getFirstName from "../components/utils/getFirstName"

function Home() {
    const { user } = useContext(AuthContext)

    const [userTasks, setUserTasks] = useState([])

    useEffect(() => {
        axios
            .get(`/users/user/${user._id}`)
            .then(res => {
                setUserTasks(res.data.tasks)
            })
            .catch(err => console.log(err))
    }, [user._id])

    const sortedTasks = userTasks.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
    })

    return (
        <Page title="Home">
            <TitleFlex>
                <Font.H1>Hello {getFirstName(user.fullName)}</Font.H1>

                <Button btnstyle="primary" to="/new-task">
                    Create a new task
                </Button>
            </TitleFlex>

            {userTasks.length === 0 ? (
                <Font.P>You did not create any task yet.</Font.P>
            ) : (
                <List>
                    {sortedTasks.map(task => (
                        <Card key={task._id} task={task} index={task._id} />
                    ))}
                </List>
            )}
        </Page>
    )
}

export default Home
