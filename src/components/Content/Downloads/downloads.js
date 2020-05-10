import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyScreen from '../../Common/Screen/empty-screen'
import CAppBar from '../../Common/AppBar/app-bar'
import ListCourses from '../../Courses/ListCourses/list-courses'
import coursesData from '../../../data/mock/courses-mock-data'
import Styles from '../../../globals/styles'
import Sizes from '../../../globals/sizes'

const Downloads = () => {
    return (
        <View style={styles.container}>
            <CAppBar
                title='Downloads' />
            <View style={styles.body}>
                {coursesData.length == 0 && <EmptyScreen
                    uri='cloud-download'
                    title='No Downloads'
                    subtitle='Courses you download will appear here' />}
                <ListCourses
                    data={coursesData}
                    hasTrailing={false} />
            </View>
        </View>
    )
}

export default Downloads

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    body: {
        paddingHorizontal: Sizes.s8,
    }
})
