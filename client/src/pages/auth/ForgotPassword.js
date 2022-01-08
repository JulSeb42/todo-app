// Packages
import React, { useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import Error from "../../components/forms/Error"

// Utils
import getRandomString from "../../components/utils/getRandomString"

function ForgotPassword() {
    const { isLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleEmail = e => setEmail(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            email,
            resetToken: getRandomString(20),
        }

        axios
            .put("/auth/forgot", requestBody)
            .then(res => {
                navigate("/login/forgot-password/email-sent")
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return isLoggedIn ? (
        <Navigate to="/" />
    ) : (
        <Page title="I forgot my password">
            <Font.H1>I forgot my password</Font.H1>

            <Font.P>
                Please enter your email address, we will send you a link to
                reset your password.
            </Font.P>

            <Form btnprimary="Send" btncancel="/login" onSubmit={handleSubmit}>
                <Input
                    label="Email"
                    type="email"
                    id="email"
                    onChange={handleEmail}
                    value={email}
                />
            </Form>

            {errorMessage && <Error>{errorMessage}</Error>}
        </Page>
    )
}

export default ForgotPassword
