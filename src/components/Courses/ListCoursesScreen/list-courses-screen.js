import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import CAppBar from '../../Common/AppBar/c-app-bar'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import ListCourses from '../ListCourses/list-courses'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'

const ListCoursesScreen = ({ route }) => {
    const params = route.params

    return (
        <View style={Styles.fullScreen}>
            <CAppBar />
            <View style={Styles.screenContainer}>
                <CText data={params.title} style={TextStyles.headline} />
                <SizedBox height={Sizes.s16}/>
                <ListCourses hasTrailing={false} />
            </View>
        </View>
    )
}

export default ListCoursesScreen

const styles = StyleSheet.create({})
