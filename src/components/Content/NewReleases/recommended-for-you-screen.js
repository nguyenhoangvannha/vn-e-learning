import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ImageAppBar from '../../Common/AppBar/image-appbar'
import Strings from '../../../res/strings'
import i18n from '../../../res/i18n'
import Styles from '../../../res/styles/styles'
import ListCourses, { ListCoursesByIds } from '../../Courses/ListCourses/list-courses'
import { CoursesContext } from '../../../provider/courses-provider'
import ScreenContainer from '../../Common/Screen/screen-container'
import { useSelector, useDispatch } from 'react-redux'
import CAppBar from '../../Common/AppBar/c-app-bar'
import { Status, LoadStatus } from '../../../core/status'
import { DO_GET_RECOMMEND_COURSE_COURSE_ACTION } from '../../../feature/course/actions'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'

const RecommendedForYouScreen = () => {
    const courseState = useSelector(state => state.courseState)

    const dispatch = useDispatch();

    const [loadStatus, setLoadStatus] = useState(Status.idle())

    useEffect(() => {
        setLoadStatus(courseState.status[DO_GET_RECOMMEND_COURSE_COURSE_ACTION] ?? Status.idle())
        return () => {

        }
    }, [courseState])

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar
                //uri={Strings.defaultCourseThubnail}
                title={i18n.t('recommended_for_you')}
            />
            <View style={Styles.screenContainer}>
                {
                    loadStatus.loading == LoadStatus.loading ? <CLoadingIndicator />
                        : <ListCoursesByIds
                            hasTrailing={false}
                            data={courseState.recommendCourses} />
                }
            </View>
        </ScreenContainer>
    )
}

export default RecommendedForYouScreen

const styles = StyleSheet.create({})
