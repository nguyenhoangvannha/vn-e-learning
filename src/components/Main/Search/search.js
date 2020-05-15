import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CSearchBar from '../../Common/Search/c-search-bar'
import Styles from '../../../globals/styles'
import CCard from '../../Common/Container/c-card'
import Sizes from '../../../globals/sizes'
import ListCourses from '../../Courses/ListCourses/list-courses'
import coursesData from '../../../data/mock/courses-mock-data'

const Search = () => {
    return (
        <View style={Styles.fullScreen}>
            <CCard style={styles.searchBar}>
                <CSearchBar />
            </CCard>
            <ListCourses
                headerText='152 results'
                data={coursesData} />
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
