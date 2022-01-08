// Packages
import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"

// Components
import { AuthContext } from "./context/auth"
import GlobalStyles from "./components/styles/GlobalStyles"
import * as Variables from "./components/styles/Variables"
import Switch from "./components/Switch"
import Header from "./components/layouts/Header"

// Utils
import useDarkMode from "./components/utils/useDarkMode"

function App() {
    const { isLoggedIn } = useContext(AuthContext)

    const [theme, setTheme, componentMounted] = useDarkMode()
    const themeMode =
        theme === "Light" ? Variables.LightTheme : Variables.DarkTheme

    if (!componentMounted) {
        return <div />
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />

            {isLoggedIn && <Header theme={theme} toggleTheme={setTheme} />}

            <Switch />
        </ThemeProvider>
    )
}

export default App
