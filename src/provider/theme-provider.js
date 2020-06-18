import React, { useState } from 'react'
import Colors from '../res/colors';


export const themes = {
    light: {
        statusBarColor: Colors.white,
        appBarColor: Colors.white,
        foreground: Colors.black,
        background: Colors.white,
        textColor: Colors.black,
        iconColor: Colors.black,
        divider: Colors.grey100,
        popupColor: Colors.white,
        chipColor: Colors.grey100,
        tabColor: Colors.white,
        indicatorColor: Colors.green,
        activeTextColor: Colors.black,
    },
    dark: {
        statusBarColor: Colors.dark,
        appBarColor: Colors.dark,
        foreground: Colors.white,
        background: Colors.black,
        textColor: Colors.white,
        iconColor: Colors.white,
        divider: Colors.white,
        popupColor: Colors.dark,
        chipColor: Colors.dark,
        tabColor: Colors.dark,
        indicatorColor: Colors.green,
        activeTextColor: Colors.white,
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
