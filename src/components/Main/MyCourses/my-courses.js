import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import CText from '../../Common/Text/c-text'
import { ListMyCourses } from '../../Courses/ListCourses/list-courses'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import Colors from '../../../res/colors'
import ScreenContainer from '../../Common/Screen/screen-container'

export default function MyCoursesTab() {

    const courseState = useSelector(state => state.courseState)

    return (
        <ScreenContainer style={{paddingHorizontal: Sizes.s8, paddingVertical: Sizes.s4}} >
            <SizedBox height={Sizes.s16} />
            <ListMyCourses
                style={{ height: '100%' }}
                data={Object.values(courseState.myCourses)} />
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({})
