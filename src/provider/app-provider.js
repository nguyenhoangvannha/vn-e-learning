import React from 'react'
import { AuthenticationProvider } from './authentication-provider';
import { ThemeProvider } from './theme-provider';
import { CoursesProvider } from './courses-provider'
import { FavouritesProvider } from './favourites-provider';
import { SkillsProvider } from './skills-provider';
import { AuthorsProvider } from './authors-provider';
import { PathsProvider } from './paths-provider';
const AppContext = React.createContext();

const AppProvider = (props) => {

    return (
        <AppContext.Provider>
            <AuthenticationProvider>
                <ThemeProvider>
                    <CoursesProvider>
                        <FavouritesProvider>
                            <SkillsProvider>
                                <AuthorsProvider>
                                    <PathsProvider>
                                        {props.children}
                                    </PathsProvider>
                                </AuthorsProvider>
                            </SkillsProvider>
                        </FavouritesProvider>
                    </CoursesProvider>
                </ThemeProvider>
            </AuthenticationProvider>
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }