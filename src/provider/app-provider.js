import React from 'react'
import { AuthenticationProvider } from './authentication-provider';
import { ThemeProvider } from './theme-provider';

const AppContext = React.createContext();

const AppProvider = (props) => {
    return (
        <AppContext.Provider>
            <AuthenticationProvider>
                <ThemeProvider>
                    {props.children}
                </ThemeProvider>
            </AuthenticationProvider>
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}