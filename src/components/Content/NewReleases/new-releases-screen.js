import React from 'react'
import { StyleSheet, View } from 'react-native'
import ImageAppBar from '../../Common/AppBar/image-appbar'
import Strings from '../../../res/strings'
import i18n from '../../../res/i18n'
import Styles from '../../../res/styles/styles'
import ListCourses from '../../Courses/ListCourses/list-courses'

const NewReleasesScreen = () => {
    return (
        <View style={Styles.fullScreen}>
            <ImageAppBar
                uri={Strings.defaultCourseThubnail}
                title={i18n.t('new_releases')}
            />
            <View style={Styles.screenContainer}>
                <ListCourses
                    hasTrailing={false} />
            </View>
        </View>
    )
}

export default NewReleasesScreen

const styles = StyleSheet.create({})
