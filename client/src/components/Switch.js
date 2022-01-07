// Packages
import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import axios from "axios"

// Pages
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

// Auth
import Signup from "../pages/auth/Signup"
import Login from "../pages/auth/Login"
import ThankYou from "../pages/auth/ThankYou"
import Verify from "../pages/auth/Verify"
import ForgotPassword from "../pages/auth/ForgotPassword"
import ForgotSent from "../pages/auth/ForgotSent"
import ResetPassword from "../pages/auth/ResetPassword"
import Goodbye from "../pages/auth/Goodbye"

// User
import MyAccount from "../pages/user/MyAccount"
import EditAccount from "../pages/user/EditAccount"
import EditPassword from "../pages/user/EditPassword"

// Tasks
import NewTask from "../pages/tasks/NewTask"
import TaskDetail from "../pages/tasks/TaskDetail"
import EditTask from "../pages/tasks/EditTask"

// Utils
import ProtectedRoutes from "./utils/ProtectedRoutes"
import scrollToTop from "./utils/scrollToTop"

function Switch() {
    const [allUsers, setAllUsers] = useState([])
    const [allTasks, setAllTasks] = useState([])
    const [edited, setEdited] = useState(false)

    useEffect(() => {
        axios
            .get("/users/user")
            .then(res => setAllUsers(res.data))
            .catch(err => console.log(err))

        axios
            .get("/tasks/task")
            .then(res => setAllTasks(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoutes redirectTo="/login">
                        <Home />
                    </ProtectedRoutes>
                }
                preload={scrollToTop()}
            />

            {/* Auth */}
            <Route
                path="/signup"
                element={<Signup />}
                preload={scrollToTop()}
            />
            <Route path="/login" element={<Login />} preload={scrollToTop()} />
            <Route
                path="/thank-you"
                element={<ThankYou />}
                preload={scrollToTop()}
            />
            {allUsers.map(user => (
                <Route
                    path={`/verify/${user.verifyToken}/${user._id}`}
                    element={
                        <ProtectedRoutes redirectTo="/login">
                            <Verify edited={edited} setEdited={setEdited} />
                        </ProtectedRoutes>
                    }
                    key={`${user.verifyToken}/${user._id}`}
                    preload={scrollToTop()}
                />
            ))}
            <Route
                path="/login/forgot-password"
                element={<ForgotPassword />}
                preload={scrollToTop()}
            />
            <Route
                path="/login/forgot-password/email-sent"
                element={<ForgotSent />}
                preload={scrollToTop()}
            />
            {allUsers.map(user => (
                <Route
                    path={`/reset-password/${user.resetToken}/${user._id}`}
                    element={<ResetPassword />}
                    key={`${user.resetToken}-${user._id}`}
                    preload={scrollToTop()}
                />
            ))}
            <Route
                path="/goodbye"
                element={<Goodbye />}
                preload={scrollToTop()}
            />

            {/* User */}
            <Route
                path="/my-account"
                element={
                    <ProtectedRoutes redirectTo="/login">
                        <MyAccount />
                    </ProtectedRoutes>
                }
                preload={scrollToTop()}
            />
            <Route
                path="/my-account/edit"
                element={
                    <ProtectedRoutes redirectTo="/login">
                        <EditAccount edited={edited} setEdited={setEdited} />
                    </ProtectedRoutes>
                }
                preload={scrollToTop()}
            />
            <Route
                path="/my-account/edit-password"
                element={
                    <ProtectedRoutes redirectTo="/login">
                        <EditPassword edited={edited} setEdited={setEdited} />
                    </ProtectedRoutes>
                }
                preload={scrollToTop()}
            />

            {/* Tasks */}
            <Route
                path="/new-task"
                element={
                    <ProtectedRoutes redirectTo="/login">
                        <NewTask edited={edited} setEdited={setEdited} />
                    </ProtectedRoutes>
                }
                preload={scrollToTop()}
            />
            {allTasks.map(task => (
                <Route
                    path={`/tasks/${task._id}`}
                    element={
                        <ProtectedRoutes redirectTo="/login">
                            <TaskDetail
                                task={task}
                                edited={edited}
                                setEdited={setEdited}
                            />
                        </ProtectedRoutes>
                    }
                    preload={scrollToTop()}
                    key={task._id}
                />
            ))}

            {allTasks.map(task => (
                <Route
                    path={`/tasks/${task._id}/edit`}
                    element={
                        <ProtectedRoutes redirectTo="/login">
                            <EditTask
                                task={task}
                                edited={edited}
                                setEdited={setEdited}
                            />
                        </ProtectedRoutes>
                    }
                    preload={scrollToTop()}
                    key={`edit-${task._id}`}
                />
            ))}

            {/* 404 */}
            <Route path="*" element={<NotFound />} preload={scrollToTop()} />
        </Routes>
    )
}

export default Switch
