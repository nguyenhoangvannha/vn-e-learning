import React from 'react'
import { AuthenticationProvider } from './authentication-provider';
import { ThemeProvider } from './theme-provider';
import { CoursesProvider } from './courses-provider'
const AppContext = React.createContext();

const AppProvider = (props) => {
    return (
        <AppContext.Provider>
            <AuthenticationProvider>
                <ThemeProvider>
                    <CoursesProvider>
                        {props.children}
                    </CoursesProvider>
                </ThemeProvider>
            </AuthenticationProvider>
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }