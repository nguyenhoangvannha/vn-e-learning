import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CText from '../../../Common/Text/c-text'
import Styles from '../../../../globals/styles'
import ListCourses from '../../../Courses/ListCourses/list-courses'
import SizedBox from '../../../Common/Container/sized-box'
import Sizes from '../../../../globals/sizes'

const SearchCourses = () => {
    return (
        <View style={Styles.screenContainer}>
            <CText data='Skill Levels' />
            <SizedBox height={Sizes.s8} />
            <ListCourses
                headerText='154 Results' />
        </View>
    )
}

export default SearchCourses

const styles = StyleSheet.create({})
