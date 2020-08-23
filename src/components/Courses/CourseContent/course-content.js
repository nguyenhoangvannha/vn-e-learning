import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CourseContentItem from './CourseContentItem/course-content-item'
import Colors from '../../../res/colors'
import Sizes from '../../../res/sizes'
import CFlatList from '../../Common/Container/c-flat-list'
import CDivider from '../../Common/Container/c-divider'
import ContentContainer from '../../Common/Screen/content-container'
import { useSelector, useDispatch } from 'react-redux'
import CText from '../../Common/Text/c-text'
import CSectionList from '../../Common/Container/c-section-list'
import CSectionHeader from '../../Common/Container/c-section-header'

const CourseContent = () => {
    const courseState = useSelector(state => state.courseState)

    const course = courseState.courses[courseState.currentCourseId]

    const sections = course.section ?? []

    const DATA = sections.map((section, index, array) => {
        return {
            title: section.name,
            data: section.lesson
        }
    })

    return (
        <ContentContainer style={styles.container}>
            <CSectionList
                sections={DATA}
                renderItem={({ item }) => {
                    //return <CText data={`${item}`} />
                    return <CourseContentItem data={item} />
                }}
                renderSectionHeader={({ section: { title, data } }) => (
                    <CSectionHeader
                        leadingText={`${title}`}
                        hasTrailing={false} />
                )}
                keyExtractor={(item, index) => item + index}>
            </CSectionList>
        </ContentContainer>
    )
}

export default CourseContent

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingVertical: Sizes.s16,
    }
})
