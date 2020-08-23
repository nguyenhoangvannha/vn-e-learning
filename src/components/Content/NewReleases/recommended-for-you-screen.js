import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import ImageAppBar from '../../Common/AppBar/image-appbar'
import Strings from '../../../res/strings'
import i18n from '../../../res/i18n'
import Styles from '../../../res/styles/styles'
import ListCourses, { ListCoursesByIds } from '../../Courses/ListCourses/list-courses'
import { CoursesContext } from '../../../provider/courses-provider'
import ScreenContainer from '../../Common/Screen/screen-container'
import { useSelector, useDispatch } from 'react-redux'

const RecommendedForYouScreen = () => {
    const courseState = useSelector(state => state.courseState)

    const dispatch = useDispatch();

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <ImageAppBar
                uri={Strings.defaultCourseThubnail}
                title={i18n.t('recommended_for_you')}
            />
            <View style={Styles.screenContainer}>
                <ListCoursesByIds
                    hasTrailing={false}
                    data={courseState.recommendCourses} />
            </View>
        </ScreenContainer>
    )
}

export default RecommendedForYouScreen

const styles = StyleSheet.create({})
