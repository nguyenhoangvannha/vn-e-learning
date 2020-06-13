import React from 'react'
import { AuthenticationProvider } from './authentication-provider';
import { ThemeProvider } from './theme-provider';
import { CoursesProvider } from './courses-provider'
import { FavouritesProvider } from './favourites-provider';
const AppContext = React.createContext();

const AppProvider = (props) => {
    return (
        <AppContext.Provider>
            <AuthenticationProvider>
                <ThemeProvider>
                    <CoursesProvider>
                        <FavouritesProvider>
                            {props.children}
                        </FavouritesProvider>
                    </CoursesProvider>
                </ThemeProvider>
            </AuthenticationProvider>
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }