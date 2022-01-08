// Packages
import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

// Components
import * as Font from "../../components/styles/Font"
import Error from "../../components/forms/Error"
import Page from "../../components/layouts/Page"
import { AuthContext } from "../../context/auth"

function Verify({ edited, setEdited }) {
    const { user, updateUser } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState(undefined)

    const requestBody = {
        id: user._id,
        verifyToken: user.verifyToken,
        verified: true,
    }

    axios
        .put("/auth/verify", requestBody)
        .then(res => {
            const { user } = res.data
            updateUser(user)
            setEdited(!edited)
        })
        .catch(err => {
            const errorDescription = err.response.data.message
            setErrorMessage(errorDescription)
        })

    return (
        <Page title="Your account is verified!">
            <Font.H1>Your account is verified!</Font.H1>

            <Font.P>
                You can now access all the functionalities on our website.{" "}
                <Link to="/">Go to the homepage</Link>.
            </Font.P>

            {errorMessage && <Error>{errorMessage}</Error>}
        </Page>
    )
}

export default Verify
