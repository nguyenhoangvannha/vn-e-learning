import React from 'react'
import { ThemeProvider } from './theme-provider';
import { CoursesProvider } from './courses-provider'
import { FavouritesProvider } from './favourites-provider';
import { SkillsProvider } from './skills-provider';
import { AuthorsProvider } from './authors-provider';
import { PathsProvider } from './paths-provider';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '../feature/store'
const AppContext = React.createContext();

const AppProvider = (props) => {
    return (
        <StoreProvider store={store}>
            <AppContext.Provider>
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
            </AppContext.Provider>
        </StoreProvider>
    )
}

export { AppContext, AppProvider }