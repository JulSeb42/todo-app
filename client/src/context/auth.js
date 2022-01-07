// Packages
import React, { useState, useEffect, createContext } from "react"
import axios from "axios"

import localStorageExpires from "../components/utils/localStorageExpires"

const AuthContext = createContext()

// const API_URL = "http://localhost:5005"

function AuthProviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const loginUser = user => {
        localStorageExpires("isLoggedIn", true, 864000000)
        localStorage.setItem("user", JSON.stringify(user))
        setUser(JSON.parse(localStorage.getItem("user")))
        setIsLoggedIn(true)
        verify()
    }

    const logoutUser = () => {
        axios.put("/auth/logout").then(() => {
            localStorage.removeItem("isLoggedIn")
            localStorage.removeItem("user")

            setIsLoggedIn(false)
            setUser(null)
        })
    }

    const verify = () => {
        if (localStorage.getItem("isLoggedIn")) {
            axios
                .get("/auth/loggedin")
                .then(() => {
                    setUser(JSON.parse(localStorage.getItem("user")))
                    setIsLoggedIn(true)
                    setIsLoading(false)
                })
                .catch(err => console.log(err))
        } else {
            setIsLoading(false)
        }
    }

    const updateUser = updatedUser => {
        localStorage.setItem("user", JSON.stringify(updatedUser))
        setUser(JSON.parse(localStorage.getItem("user")))
    }

    useEffect(() => {
        verify()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                loginUser,
                logoutUser,
                isLoading,
                updateUser,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthProviderWrapper, AuthContext }
