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
import FilterContainer from "../components/filters/FilterContainer"
import { TabList, TabButton } from "../components/layouts/Tabs"
import Select from "../components/forms/Select"
import Input from "../components/forms/Input"

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

    let sortedTasks = userTasks.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
    })

    // Tabs
    const [allTasks, setAllTasks] = useState(true)
    const [todoTasks, setTodoTasks] = useState(false)
    const [doingTasks, setDoingTasks] = useState(false)
    const [doneTasks, setDoneTasks] = useState(false)

    const handleAllTasks = () => {
        setAllTasks(true)
        setTodoTasks(false)
        setDoingTasks(false)
        setDoneTasks(false)
    }

    const handleTodoTasks = () => {
        setAllTasks(false)
        setTodoTasks(true)
        setDoingTasks(false)
        setDoneTasks(false)
    }

    const handleDoingTasks = () => {
        setAllTasks(false)
        setTodoTasks(false)
        setDoingTasks(true)
        setDoneTasks(false)
    }

    const handleDoneTasks = () => {
        setAllTasks(false)
        setTodoTasks(false)
        setDoingTasks(false)
        setDoneTasks(true)
    }

    if (allTasks) {
        sortedTasks = userTasks.sort((a, b) => {
            return new Date(a.date) - new Date(b.date)
        })
    }

    if (todoTasks) {
        sortedTasks = sortedTasks.filter(task => task.status === "todo")
    }

    if (doingTasks) {
        sortedTasks = sortedTasks.filter(task => task.status === "doing")
    }

    if (doneTasks) {
        sortedTasks = sortedTasks.filter(task => task.status === "done")
    }

    // Filters
    // Search
    const [query, setQuery] = useState("")
    const handleSearch = e => setQuery(e.target.value)

    let results = sortedTasks.filter(task => {
        return task.title.toLowerCase().includes(query.toLowerCase())
    })

    // Get all tags
    let allTags = results.map(task => task.tags)
    let mergedTags = Array.prototype.concat(...allTags).sort()
    let uniqTags = [...new Set(mergedTags)]

    // Filter by tags
    const [tag, setTag] = useState("All")
    const handleTagChange = e => setTag(e.target.value)

    if (tag !== "All") {
        results = results.filter(task => {
            if (task.tags.includes(tag.toLowerCase())) {
                return task
            }
        })
    }

    return (
        <Page title="Home">
            <TitleFlex>
                <Font.H1>Hello {getFirstName(user.fullName)}</Font.H1>

                <Button btnstyle="primary" to="/new-task">
                    Create a new task
                </Button>
            </TitleFlex>

            <FilterContainer>
                <Input
                    label="Search by title"
                    id="title"
                    onChange={handleSearch}
                />

                {uniqTags.length > 0 && (
                    <Select
                        label="Filter by tags"
                        onChange={handleTagChange}
                        value={tag}
                    >
                        <option value="All">All</option>

                        {uniqTags.map((tag, i) => (
                            <option key={i} value={tag.toLowerCase()}>
                                {tag.charAt(0).toUpperCase() + tag.slice(1)}
                            </option>
                        ))}
                    </Select>
                )}
            </FilterContainer>

            <TabList>
                <TabButton
                    onClick={handleAllTasks}
                    className={allTasks && "active"}
                >
                    All
                </TabButton>

                <TabButton
                    onClick={handleTodoTasks}
                    className={todoTasks && "active"}
                >
                    To do
                </TabButton>

                <TabButton
                    onClick={handleDoingTasks}
                    className={doingTasks && "active"}
                >
                    Doing
                </TabButton>

                <TabButton
                    onClick={handleDoneTasks}
                    className={doneTasks && "active"}
                >
                    Done
                </TabButton>
            </TabList>

            {userTasks.length === 0 ? (
                <Font.P>You did not create any task yet.</Font.P>
            ) : userTasks.length > 0 && results.length === 0 ? (
                <Font.P>No results!</Font.P>
            ) : (
                <List>
                    {results.map(task => (
                        <Card key={task._id} task={task} index={task._id} />
                    ))}
                </List>
            )}
        </Page>
    )
}

export default Home
