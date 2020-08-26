import React from 'react'
import { ThemeProvider } from './theme-provider';
import { CoursesProvider } from './courses-provider'
import { FavouritesProvider } from './favourites-provider';
import { SkillsProvider } from './skills-provider';
import { AuthorsProvider } from './authors-provider';
import { PathsProvider } from './paths-provider';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '../feature/store'
import { I18nextProvider } from 'react-i18next';
import i18n from '../res/i18n';
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
                                        <I18nextProvider i18n={i18n}>
                                            {props.children}
                                        </I18nextProvider>
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