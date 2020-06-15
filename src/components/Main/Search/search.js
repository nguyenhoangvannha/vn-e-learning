import React, { useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
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
import CText from '../../Common/Text/c-text'
import { CoursesContext } from '../../../provider/courses-provider'
import ListCourses from '../../Courses/ListCourses/list-courses'

const Tab = createMaterialTopTabNavigator();

const Search = () => {

    const [courseIds, setCourseIds] = useState([]);

    const coursesContext = useContext(CoursesContext)

    const [searching, setSearching] = useState(undefined)

    const buildInit = () => {
        return (
            <CText>Type something</CText>
        )
    }

    const buildSuggestion = () => {
        return (
            <ListCourses
                data={courseIds}>

            </ListCourses>
        )
    }

    function search(keyword) {
        setCourseIds([])
        
        const lKeyword = keyword.toLowerCase();

        const resultCourseIds = [];

        coursesContext.courses.forEach((value, key) => {
            if (value.name.toLowerCase().includes(lKeyword) || value.introduce.toLowerCase().includes(lKeyword)) {
                resultCourseIds.push(key)
            }
        })

        setCourseIds(resultCourseIds)
    }

    function onPressDone() {
        setSearching(false)
        console.log('onPressDone', searching)
    }

    const buildResult = () => {
        return <Tab.Navigator>
            <Tab.Screen
                name={Routes.SearchAll}
                component={SearchAll}
                options={{ title: i18n.t('all') }}>
            </Tab.Screen>
            <Tab.Screen
                name={Routes.SearchCourses}
                options={{ title: i18n.t('courses') }} >
                {() => <SearchCourses
                    courseIds={courseIds}>
                </SearchCourses>}
            </Tab.Screen>
            <Tab.Screen name={Routes.SearchPaths} component={SearchPaths} options={{ title: i18n.t('paths') }} />
            <Tab.Screen name={Routes.SearchAuthors} component={SearchAuthors} options={{ title: i18n.t('authors') }} />
        </Tab.Navigator>
    }

    return (
        <View style={Styles.fullScreen}>
            <CCard style={styles.searchBar}>
                <CSearchBar
                    onTextChange={(value) => {
                        console.log('onTextChange', value)
                        if (value === '') {
                            setSearching(undefined)
                        } else {
                            setSearching(true)
                            search(value)
                        }
                    }}
                    onPressDone={onPressDone} />
            </CCard>
            {searching == undefined ? buildInit() : (searching === true ? buildSuggestion() : buildResult())}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchBar: {
        borderRadius: Sizes.s0,
    }
})
