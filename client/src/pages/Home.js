// Packages
import React, { useContext } from "react"
import { Link } from "react-router-dom"

// Components
import { AuthContext } from "../context/auth"
import Page from "../components/layouts/Page"
import Button from "../components/ui/Button"

function Home() {
    const { user } = useContext(AuthContext)

    return (
        <Page title="Home">
            <h1>All your tasks</h1>

            <Button to="/new-task">Create a new task</Button>

            {user.tasks.length === 0 ? (
                <p>You did not create any task yet.</p>
            ) : (
                <ul>
                    {user.tasks.map(task => (
                        <li key={task._id}>
                            <Link to={`/tasks/${task._id}`}>{task.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </Page>
    )
}

export default Home
