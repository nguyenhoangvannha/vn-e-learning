import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import i18n from '../../../res/i18n'
import Strings from '../../../res/strings'
import Sizes from '../../../res/sizes'
import Styles from '../../../res/styles/styles'
import Alignment from '../../../res/styles/alignment'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import FontWeight from '../../../globals/font-weight'
import CButton from '../../Common/Button/c-button'
import SizedBox from '../../Common/Container/sized-box'
import ListCourses from '../../Courses/ListCourses/list-courses'
import CScrollView from '../../Common/Container/c-scroll-view'
import CAvatar from '../../Common/Image/c-avatar'
import ScreenContainer from '../../Common/Screen/screen-container'
import { useSelector, useDispatch } from 'react-redux'
import { DO_GET_INSTRUCTOR_DETAIL_INSTRUCTOR_ACTION } from '../../../feature/instructor/actions'
import { Status, LoadStatus } from '../../../core/status'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'
import ErrorBack from '../../Common/error/error_back'

const AuthorScreen = ({ route }) => {

    const instructorId = route.params.instructorId;

    const instructorState = useSelector(state => state.instructorState)

    const dispatch = useDispatch();

    const [loadInstructorStatus, setLoadInstructorStatus] = useState(Status.idle())


    useEffect(() => {

        setLoadInstructorStatus(instructorState.status[`${DO_GET_INSTRUCTOR_DETAIL_INSTRUCTOR_ACTION}${instructorId}`])

        return () => {
            //cleanup
        }
    }, [instructorState])

    const onPressFollow = (instructor) => {
        console.log('DEBUG XS', instructor)
    }

    const buildDetails = () => {
        var author = instructorState.instructors[instructorId]

        return (
            <View>
                <CAppBar title={i18n.t('author')} />
                <CScrollView contentContainerStyle={{ ...Styles.screenContainer, ...styles.body }}>
                    <CAvatar uri={author.avatar} size={Sizes.s68} />
                    <CText style={{ ...TextStyles.title, ...styles.name }}>{author.name}</CText>
                    <CText style={{ ...TextStyles.caption, ...styles.name }}>{author.skills}</CText>
                    <CButton title={i18n.t('follow')} style={{ width: '100%' }} onPress={() => onPressFollow(author)} />
                    <CText style={{ ...TextStyles.subtitle, ...styles.description }}>
                        {author.intro}
                    </CText>
                    <SizedBox height={Sizes.s32} />
                    <CText style={{ ...TextStyles.subhead, alignSelf: Alignment.flexStart }}>{`${i18n.t('rating_count')} ${author.countRating}`}</CText>
                    <SizedBox height={Sizes.s16} />
                    <CText style={{ ...TextStyles.subhead, alignSelf: Alignment.flexStart }}>{`${i18n.t('courses')} ${author.totalCourse}`}</CText>
                    <SizedBox height={Sizes.s16} />
                    <ListCourses
                        data={author.courseIds}
                        hasTrailing={false} />
                </CScrollView>
            </View>
        )
    }

    return (
        <ScreenContainer style={Styles.fullScreen}>
            {
                loadInstructorStatus.loadStatus == LoadStatus.loading ? <CLoadingIndicator />
                    : loadInstructorStatus.loadStatus == LoadStatus.success ? buildDetails()
                        : <ErrorBack
                            text={loadInstructorStatus.message} />
            }
        </ScreenContainer>
    )
}

export default AuthorScreen

const styles = StyleSheet.create({
    body: {
        alignItems: Alignment.center,
    },
    name: {
        fontWeight: FontWeight.bold,
        paddingTop: Sizes.s8,
        paddingBottom: Sizes.s8,
    },
    description: {
        paddingTop: Sizes.s12,
    }
})
