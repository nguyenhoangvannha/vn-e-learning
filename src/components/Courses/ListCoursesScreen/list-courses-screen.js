import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from '../../../globals/styles'
import CAppBar from '../../Common/AppBar/c-app-bar'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../globals/text-styles'
import ListCourses from '../ListCourses/list-courses'

const ListCoursesScreen = ({ route }) => {
    const params = route.params

    return (
        <View style={Styles.fullScreen}>
            <CAppBar />
            <View style={Styles.screenContainer}>
                <CText data={params.title} style={TextStyles.headline} />
                <ListCourses hasTrailing={false} />
            </View>
        </View>
    )
}

export default ListCoursesScreen

const styles = StyleSheet.create({})
