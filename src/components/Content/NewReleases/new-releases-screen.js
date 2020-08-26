import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Strings from '../../../res/strings'
import i18n from '../../../res/i18n'
import Styles from '../../../res/styles/styles'
import ListCourses, { ListCoursesByIds } from '../../Courses/ListCourses/list-courses'
import { CoursesContext } from '../../../provider/courses-provider'
import ScreenContainer from '../../Common/Screen/screen-container'
import { useSelector, useDispatch } from 'react-redux'

const NewReleasesScreen = () => {
    const courseState = useSelector(state => state.courseState)

    const dispatch = useDispatch();

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar
                //uri={Strings.defaultCourseThubnail}
                title={i18n.t('new_releases')}
            />
            <View style={Styles.screenContainer}>
                <ListCoursesByIds
                    hasTrailing={false}
                    data={courseState.topNewCourses} />
            </View>
        </ScreenContainer>
    )
}

export default NewReleasesScreen

const styles = StyleSheet.create({})
