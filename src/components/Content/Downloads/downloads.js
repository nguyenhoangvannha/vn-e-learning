import React from 'react'
import { StyleSheet, View } from 'react-native'
import EmptyScreen from '../../Common/Screen/empty-screen'
import ListCourses from '../../Courses/ListCourses/list-courses'
import Sizes from '../../../res/sizes'
import Styles from '../../../res/styles/styles'
import IconName from '../../../res/icon-name'
import HomeAppBar from '../../Common/AppBar/home-app-bar'

const Downloads = () => {

    const downloadedCourses = []

    const Content = () => {
        if (downloadedCourses.length == 0)
            return <EmptyScreen
                uri={IconName.mdCloudDownload}
                title='No Downloads'
                subtitle='Courses you download will appear here' />
        else return <ListCourses
            data={downloadedCourses}
            hasTrailing={false} />
    }

    return (
        <View style={Styles.fullScreen}>
            <HomeAppBar title='Downloads' />
            <View style={Styles.body}>
                <Content/>
            </View>
        </View>
    )
}

export default Downloads

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: Sizes.s8,
    }
})
