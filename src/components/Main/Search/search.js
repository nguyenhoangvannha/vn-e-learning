import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import CSearchBar from '../../Common/Search/c-search-bar'
import Styles from '../../../res/styles/styles'
import CCard from '../../Common/Container/c-card'
import Sizes from '../../../res/sizes'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Routes from '../../../routes/routes'
import SearchAll from './All/search-all'
import SearchCourses from './Courses/search-courses'
import SearchPaths from './Paths/search-paths'
import SearchAuthors from './Authors/search-authors'
import i18n from '../../../res/i18n'
import { CoursesContext } from '../../../provider/courses-provider'
import CFlatList from '../../Common/Container/c-flat-list'
import ListTileText from '../../Common/Container/list-tile-text'
import SearchGuideScreen from '../../Common/Search/search-guide-screen'
import { PathsContext } from '../../../provider/paths-provider'
import { AuthorsContext } from '../../../provider/authors-provider'
import ScreenContainer from '../../Common/Screen/screen-container'
import { ThemeContext } from '../../../provider/theme-provider'
import { useSelector, useDispatch } from 'react-redux'
import { Status, LoadStatus } from '../../../core/status'
import { DO_SEARCH_COURSE_COURSE_ACTION, DoSearchCourseCourseAction } from '../../../feature/course/actions'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'
import ErrorText from '../../Common/error/error-text'
import CText from '../../Common/Text/c-text'
import CFlatButton from '../../Common/Button/c-flat-button'
import SectionCourses from '../../Courses/SectionCourses/section-courses'

const Tab = createMaterialTopTabNavigator();

const Search = () => {
    const courseState = useSelector(state => state.courseState)

    const dispatch = useDispatch();

    const [searchStatus, setSearchStatus] = useState(Status.idle())

    const [currentKeyword, setCurrentKeyword] = useState('')


    useEffect(() => {

        setSearchStatus(courseState.status[DO_SEARCH_COURSE_COURSE_ACTION])

        return () => {
            //cleanup
        }
    }, [courseState])

    const coursesContext = useContext(CoursesContext)

    const pathsContext = useContext(PathsContext)

    const authorsContext = useContext(AuthorsContext)

    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    const [courseIds, setCourseIds] = useState([]);

    const [pathIds, setPathIds] = useState([]);

    const [authorIds, setAuthorIds] = useState([])

    const [suggestions, setSuggestions] = useState([]);

    const [searching, setSearching] = useState(undefined)

    const buildInit = () => {
        return (
            <SearchGuideScreen />
        )
    }

    const buildSuggestion = () => {
        console.log('buildSuggestion', suggestions.length)
        return (
            <CFlatList
                hasTrailing={false}
                data={suggestions}
                renderItem={({ item }) => {
                    return <ListTileText subtitle={item} style={styles.suggestion}>

                    </ListTileText>
                }}
                keyExtractor={item => item}>
            </CFlatList>
        )
    }

    function search(keyword) {
        dispatch(DoSearchCourseCourseAction(keyword))
    }

    function onPressDone() {
        search(currentKeyword)
        console.log('onPressDone', searching)
    }

    const build = () => {
        var loadStatus = searchStatus.loadStatus

        return loadStatus === LoadStatus.loading ? <CLoadingIndicator /> :
            loadStatus === LoadStatus.error ? <ErrorText text={searchStatus.message} /> :
                buildCourses()
    }

    const buildCourses = () => {
        if(courseState.searchResults.length == 0)
        return (
            <SearchGuideScreen
            title={i18n.t('not_found')}
            />
        )
        return (
            <SectionCourses
                data={courseState.searchResults}
            />
        )
    }

    const buildResult = () => {
        return <Tab.Navigator tabBarOptions={{
            contentContainerStyle: { backgroundColor: theme.tabColor },
            activeTintColor: theme.activeTextColor,
            inactiveTintColor: theme.textColor,
            indicatorStyle: { backgroundColor: theme.indicatorColor },
        }}>
            <Tab.Screen
                name={Routes.SearchAll}
                options={{ title: i18n.t('all') }}>
                {() => <SearchAll
                    courseIds={courseIds}
                    pathIds={pathIds}
                    authorIds={authorIds}>
                </SearchAll>}
            </Tab.Screen>
            <Tab.Screen
                name={Routes.SearchCourses}
                options={{ title: i18n.t('courses') }} >
                {() => <SearchCourses
                    courseIds={courseIds}>
                </SearchCourses>}
            </Tab.Screen>
            <Tab.Screen name={Routes.SearchPaths} options={{ title: i18n.t('paths') }} >
                {() => <SearchPaths
                    pathIds={pathIds}>
                </SearchPaths>}
            </Tab.Screen>
            <Tab.Screen name={Routes.SearchAuthors} options={{ title: i18n.t('authors') }} >
                {() => <SearchAuthors
                    authorIds={authorIds}>
                </SearchAuthors>}
            </Tab.Screen>
        </Tab.Navigator>
    }

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CCard style={styles.searchBar}>
                <CSearchBar
                    onTextChange={(value) => {
                        setCurrentKeyword(value)
                        // console.log('onTextChange', value)
                        // if (value === '') {
                        //     setSearching(false)
                        // } else {
                        //     setSearching(true)
                        //     search(value)
                        // }
                    }}
                    onPressDone={onPressDone} />
            </CCard>
            {build()}
            {/* {searching == undefined ? buildInit() : (searching === true ? buildSuggestion() : buildResult())} */}
        </ScreenContainer>
    )
}

export default Search

const styles = StyleSheet.create({
    searchBar: {
        borderRadius: Sizes.s0,
    },
    suggestion: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1
    }
})
