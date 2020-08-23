import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import VideoView from '../../Common/Video/video-view'
import Sizes from '../../../res/sizes'
import CScrollView from '../../Common/Container/c-scroll-view'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../res/styles/alignment'
import SectionCourseItemInfo from '../SectionCoursesItem/section-course-item-info'
import CAppBar from '../../Common/AppBar/c-app-bar'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import CIonIcon from '../../Common/Icon/c-ion-icon'
import IconName from '../../../res/icon-name'
import CourseActions from '../CourseActions/course-actions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CourseContent from '../CourseContent/course-content'
import CourseTranscript from '../CourseTranscript/course-transcript'
import Routes from '../../../routes/routes'
import { ShareUtils } from '../../../utils/share-utils'
import CButton from '../../Common/Button/c-button'
import Colors from '../../../res/colors'
import CText from '../../Common/Text/c-text'
import i18n from '../../../res/i18n'
import ScreenContainer from '../../Common/Screen/screen-container'
import { ThemeContext } from '../../../provider/theme-provider'
import { useSelector, useDispatch } from 'react-redux'
import { Status, LoadStatus } from '../../../core/status'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'
import { DO_GET_COURSE_DETAIL_COURSE_ACTION } from '../../../feature/course/actions'
import ErrorText from '../../Common/error/error-text'
import ErrorBack from '../../Common/error/error_back'
import InstructorChipItem from '../../Author/instructor_chip_item'
import TextStyles from '../../../res/styles/text-styles'
import { DateFormat } from '../../../utils/date-format'

const Tab = createMaterialTopTabNavigator()

const CourseDetail = ({ route }) => {

    var courseId = route.params.courseId

    const courseState = useSelector(state => state.courseState)

    var allCourses = courseState.courses;

    const dispatch = useDispatch();

    const [status, setStatus] = useState(Status.idle())

    useEffect(() => {

        const loadCourseDetailStatus = courseState.status[`${DO_GET_COURSE_DETAIL_COURSE_ACTION}${courseId}`]

        setStatus(loadCourseDetailStatus)

        return () => {
            //cleanup
        }
    }, [courseState])


    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    const onShare = (course) => {
        ShareUtils.share({ message: course.title })
    }

    const CourseOverview = () => {
        var course = allCourses[courseId]
        var instructor = course.instructor;
        return (
            <CScrollView
                style={Styles.screenContainer}>
                <SizedBox height={Sizes.s10} />
                <CText data={course.title} style={TextStyles.headline} />
                {
                    instructor != undefined ?? <InstructorChipItem
                        id={instructor['id'] ?? ''}
                        name={instructor['name'] ?? ''}
                        avatar={instructor['avatar'] ?? ''}
                    />
                }
                <View style={Styles.row}>
                    <CText>{`${DateFormat.toMdy(Date.parse(course.updatedAt))} - `}</CText>
                    <CText>{`${course.totalHours} ${i18n.t('hours')} - `}</CText>
                    <CText>{`${course.soldNumber} ${i18n.t('learner')}`}</CText>
                    <SizedBox width={Sizes.s4} />
                </View>
                <CText>{`${course.price} vnd`}</CText>
                <CText>{`${i18n.t('requirement')} ${course.requirement} `}</CText>
                <CText>{`${i18n.t('learn_what')} ${course.learnWhat} `}</CText>

                <View style={Styles.row}>
                    <CText>{`${course.videoNumber} ${i18n.t('videos')}`}</CText>
                </View>
                <SizedBox height={Sizes.s8} />

                <SizedBox height={Sizes.s8} />
                <CourseActions
                    courseId={course.id ?? ''}
                    style={styles.courseActions} />
                <SizedBox height={Sizes.s8} />
                <CText data={course.description} />
                <SizedBox height={Sizes.s12} />
                <CButton title={i18n.t('take_a_learning_check')} color={Colors.gray} />
                <SizedBox height={Sizes.s8} />
                <CButton title={i18n.t('view_related_paths_and_courses')} color={Colors.gray} />
                <SizedBox height={Sizes.s28} />
            </CScrollView>
        )
    }

    const build = () => {
        var course = allCourses[courseId]
        var instructor = course.instructor;
        return (
            <View
                style={{ height: '100%'}}>
                <CAppBar
                    title={course.title}
                    trailing={
                        <CIonIcon
                            name={IconName.mdShare}
                            onPress={() => onShare(course)} />} />
                <VideoView uri={course.imageUrl} style={styles.videoView} />
                <Tab.Navigator
                    tabBarOptions={{
                        contentContainerStyle: { backgroundColor: theme.tabColor },
                        activeTintColor: theme.textColor,
                        inactiveTintColor: theme.textColor,
                    }}>
                    <Tab.Screen name={Routes.CourseTranscript} component={CourseOverview} options={{ title: i18n.t('overview') }} />
                    <Tab.Screen name={Routes.CourseContent} component={CourseContent} options={{ title: i18n.t('contents') }} />
                </Tab.Navigator>
            </View>
        )
    }

    return (
        <ScreenContainer style={{ ...Styles.fullScreen, }}>
            {
                status.loadStatus == LoadStatus.loading ? <CLoadingIndicator />
                    : status.loadStatus == LoadStatus.error ? <ErrorBack text={status.message} />
                        : build()
            }
        </ScreenContainer>
    )
}

export default CourseDetail

const styles = StyleSheet.create({
    videoView: {
        height: '30%',
        width: '100%',
    },
    teacherAvatar: {
        alignSelf: Alignment.baseLine
    },
    courseActions: {
        paddingHorizontal: Sizes.s12,
        paddingVertical: Sizes.s12
    }
})
