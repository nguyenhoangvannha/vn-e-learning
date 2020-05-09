import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SectionCourseItem from './SectionCoursesItem/section-courses-item'
import Styles from '../../../globals/styles'
import { Image } from 'react-native-elements'
import { ActivityIndicator } from 'react-native-paper'
import SectionCourses from './SectionCourses/section-courses'
import Colors from '../../../globals/colors'
import Sizes from '../../../globals/sizes'

const Home = () => {
    return (
        <View style={Styles.screenContainer}>
            <View style={styles.sectionCoursesContainer}>
                <SectionCourses style={styles.sectionCourses}/>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    sectionCoursesContainer: {
        height: '34%',
    },
    sectionCourses: {
        padding: Sizes.s8,
    },
})
