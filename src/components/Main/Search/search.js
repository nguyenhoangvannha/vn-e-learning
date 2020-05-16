import React from 'react'
import { StyleSheet, View } from 'react-native'
import CSearchBar from '../../Common/Search/c-search-bar'
import Styles from '../../../globals/styles'
import CCard from '../../Common/Container/c-card'
import Sizes from '../../../globals/sizes'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Routes from '../../../routes/routes'
import SearchAll from './All/search-all'
import SearchCourses from './Courses/search-courses'
import SearchPaths from './Paths/search-paths'
import SearchAuthors from './Authors/search-authors'

const Tab = createMaterialTopTabNavigator();

const Search = () => {
    return (
        <View style={Styles.fullScreen}>
            <CCard style={styles.searchBar}>
                <CSearchBar />
            </CCard>
            <Tab.Navigator>
                <Tab.Screen name={Routes.SearchAll} component={SearchAll} options={{ title: 'All' }} />
                <Tab.Screen name={Routes.SearchCourses} component={SearchCourses} options={{ title: 'Courses' }} />
                <Tab.Screen name={Routes.SearchPaths} component={SearchPaths} options={{ title: 'Paths' }} />
                <Tab.Screen name={Routes.SearchAuthors} component={SearchAuthors} options={{ title: 'Authors' }} />
            </Tab.Navigator>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchBar: {
        borderRadius: Sizes.s0,
        borderColor: 'red',
    }
})
