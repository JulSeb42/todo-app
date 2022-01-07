// Packages
import React, { useContext, useState } from "react"
import axios from "axios"
import { useNavigate, Link, Navigate } from "react-router-dom"

// Components
import { AuthContext } from "../../context/auth"
import Page from "../../components/layouts/Page"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"

function Login() {
    const { loginUser, isLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = { email, password }

        axios
            .put("/auth/login", requestBody)
            .then(res => {
                loginUser(res.data)
                navigate("/")
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return isLoggedIn ? (
        <Navigate to="/" />
    ) : (
        <Page title="Login">
            <h1>Login</h1>

            <Form onSubmit={handleSubmit} btnprimary="Log in">
                <Input
                    label="Email"
                    type="email"
                    id="email"
                    onChange={handleEmail}
                    value={email}
                />

                <Input
                    label="Password"
                    inputtype="password"
                    id="password"
                    onChange={handlePassword}
                    value={password}
                />
            </Form>

            <p>
                <Link to="/login/forgot-password">I forgot my password.</Link>
            </p>

            <p>
                You don't have an account? <Link to="/signup">Signup</Link>
            </p>

            {errorMessage && <p>{errorMessage}</p>}
        </Page>
    )
}

export default Login
