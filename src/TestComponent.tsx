import React, {useContext} from "react";
import {ThemeContext} from './App'

export default function TestComponent({children}: { children?: React.ReactNode }) {
    const theme = useContext(ThemeContext)

    const style = {
        "padding": "20px",
        backgroundColor: theme === 'dark' ? "#333" : "#ccc",
        textColor: theme ? "#ccc" : "#333"
    }


    return (
        <div style={
            style
        }>
            <p>Test</p>
            {children}
        </div>
    )
}