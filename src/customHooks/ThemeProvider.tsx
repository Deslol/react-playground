import React, {createContext, useContext, useState} from "react";

const ThemeContext = createContext('light')
const ThemeUpdateContext = createContext(() => {
})

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        setTheme((prevTheme) => {
            return prevTheme === "dark" ? "light" : "dark"
        })
    }

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <ThemeUpdateContext.Provider value={toggleTheme}>
                    {children}
                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}