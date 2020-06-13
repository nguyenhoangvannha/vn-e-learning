import React, { useState } from 'react'


export const themes = {
    dark: {
        foreground: '#000000',
        background: '#fffff'
    },
    light: {
        foreground: '#ffffff',
        background: '#000000'
    },
}

const ThemeContext = React.createContext()

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }
