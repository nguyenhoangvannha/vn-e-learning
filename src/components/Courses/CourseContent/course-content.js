import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CourseContentItem from './CourseContentItem/course-content-item'
import Colors from '../../../res/colors'
import Sizes from '../../../res/sizes'
import ContentContainer from '../../Common/Screen/content-container'
import { useSelector, useDispatch } from 'react-redux'
import CSectionList from '../../Common/Container/c-section-list'
import CSectionHeader from '../../Common/Container/c-section-header'
import COpacityButton from '../../Common/Button/c-opacity-button'

const CourseContent = ({ onTapItem }) => {
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
                    return <COpacityButton
                        onPress={onTapItem}>
                        <CourseContentItem
                            data={item} />
                    </COpacityButton>
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
        padding: Sizes.s16,
    }
})
