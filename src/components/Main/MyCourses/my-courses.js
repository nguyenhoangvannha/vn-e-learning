import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import CText from '../../Common/Text/c-text'
import { ListMyCourses } from '../../Courses/ListCourses/list-courses'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import Colors from '../../../res/colors'

export default function MyCoursesTab() {

    const courseState = useSelector(state => state.courseState)

    return (
        <View style={{ backgroundColor: Colors.white, height: '100%' }}>
            <SizedBox height={Sizes.s16} />
            <ListMyCourses
                style={{ height: '100%' }}
                data={Object.values(courseState.myCourses)} />
        </View>
    )
}

const styles = StyleSheet.create({})
