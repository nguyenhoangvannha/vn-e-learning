import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import CYoutubeVideoView from '../../Common/Video/youtube-video-view'
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
import { DO_GET_COURSE_DETAIL_COURSE_ACTION, DoGetMyCoursesCourseAction } from '../../../feature/course/actions'
import ErrorText from '../../Common/error/error-text'
import ErrorBack from '../../Common/error/error_back'
import InstructorChipItem from '../../Author/instructor_chip_item'
import TextStyles from '../../../res/styles/text-styles'
import { DateFormat } from '../../../utils/date-format'
import CExpoVideoView from '../../Common/Video/expo-video-view'
import CImage from '../../Common/Image/c-image'
import Strings from '../../../res/strings'
import CourseRatingTab from '../CourseContent/course-rating-screen'
import { CRating, AirRating } from '../../Common/Rating/c-rating'
import CChip from '../../Common/Container/c-chip'
import { RootNavigation } from '../../../routes/navigations/root-navigation'

const Tab = createMaterialTopTabNavigator()

const CourseDetail = ({ route, navigator }) => {

    var courseId = route.params.courseId

    const courseState = useSelector(state => state.courseState)

    var allCourses = courseState.courses;

    const course = allCourses[courseId]

    const [currentVideoUri, setCurrentVideoUri] = useState(course?.promoVidUrl ?? '')

    const dispatch = useDispatch();

    const [status, setStatus] = useState(Status.idle())

    useEffect(() => {

        setStatus(courseState.status[`${DO_GET_COURSE_DETAIL_COURSE_ACTION}${courseId}`])

        return () => {
            //dispatch(DoGetMyCoursesCourseAction())
        }
    }, [courseState])


    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    const onShare = (course) => {
        ShareUtils.share({ message: course.title })
    }

    const onTapLessonItem = (lesson) => {
        setCurrentVideoUri(lesson.videoUrl)
    }

    const CourseOverview = () => {
        var instructor = course.instructor;

        const stars = course?.ratings?.stars ?? [];

        var totalScore = 0.0;

        var totalPeople = 0;

        var averageScore = 0.0;

        stars.forEach((peoplesInt, index) => {
            totalScore += peoplesInt * (index + 1)
            totalPeople += peoplesInt
        })

        if (stars.length > 0) {
            averageScore = totalScore / totalPeople;
        }

        return (
            <CScrollView
                style={Styles.screenContainer}>
                <SizedBox height={Sizes.s10} />
                <CText data={course.title} style={TextStyles.courseName} />
                <SizedBox height={Sizes.s10} />
                <View style={Styles.row}>
                    <AirRating
                        showRating={true}
                        ratingCount={averageScore} />
                    <View style={{ padding: Sizes.s12 }}>
                        <CText
                            data={`${i18n.t('rated_by')} ${totalPeople} ${i18n.t('peoples')}`} />
                        <SizedBox height={Sizes.s6} />
                        <CChip title={`${course.soldNumber} ${i18n.t('learner')}`} />
                        <SizedBox height={Sizes.s6} />
                    </View>
                </View>
                <SizedBox height={Sizes.s18} />
                {
                    instructor != undefined ?? <InstructorChipItem
                        id={instructor['id'] ?? ''}
                        name={instructor['name'] ?? ''}
                        avatar={instructor['avatar'] ?? ''}
                    />
                }
                <CText>{`${i18n.t('updated_at')}   ${DateFormat.toMdy(Date.parse(course.updatedAt))} `}</CText>
                <SizedBox width={Sizes.s4} />
                <SizedBox height={Sizes.s12} />
                <View style={Styles.row}>
                    <CChip title={course.price == 0 ? i18n.t('free') : `${course.price} vnd`} />
                    <SizedBox width={Sizes.s8} />
                    <CChip title={`${course.videoNumber} ${i18n.t('videos')}`} />
                    <SizedBox width={Sizes.s8} />
                    <CChip title={`${course.totalHours} ${i18n.t('hours')}`} />
                </View>
                <SizedBox height={Sizes.s12} />
                <CText
                    style={TextStyles.title}
                    data={`${i18n.t('requirement')}`} />
                <SizedBox height={Sizes.s4} />
                <CText>{`${course.requirement} `}</CText>
                <SizedBox height={Sizes.s12} />
                <CText
                    style={TextStyles.title}
                    data={`${i18n.t('learn_what')}`} />
                <SizedBox height={Sizes.s4} />
                <CText>{`${course.learnWhat}`}</CText>
                <SizedBox height={Sizes.s8} />
                <CourseActions
                    courseId={course.id ?? ''}
                    style={styles.courseActions} />
                <SizedBox height={Sizes.s8} />
                <CText data={course.description} />
                <SizedBox height={Sizes.s12} />
                <SizedBox height={Sizes.s44} />
            </CScrollView>
        )
    }

    const buildVideoView = () => {
        const isExposedVideoFile = currentVideoUri != undefined && currentVideoUri.endsWith('.mp4')
        const isYoutubeVideo = currentVideoUri != undefined && currentVideoUri.includes('https://youtube')

        if (isExposedVideoFile) {
            return <CExpoVideoView
                uri={currentVideoUri} />
        }

        if (isYoutubeVideo) {

            var splited = currentVideoUri.split('/')

            var youtubeVideoId = splited[splited.length - 1]

            return <CYoutubeVideoView
                videoId={youtubeVideoId}
                style={styles.videoView} />
        }

        return <CImage
            uri={Strings.noVideoImage}
            height={200}
        />

    }

    const build = () => {
        return (
            <View style={{ height: '100%' }}>
                {buildVideoView()}
                <Tab.Navigator
                    tabBarOptions={{
                        contentContainerStyle: { backgroundColor: theme.tabColor },
                        activeTintColor: theme.textColor,
                        inactiveTintColor: theme.textColor,
                    }}>
                    <Tab.Screen
                        name={Routes.CourseTranscript}
                        component={CourseOverview}
                        options={{ title: i18n.t('overview') }} />
                    <Tab.Screen
                        name={Routes.CourseContent}
                        //component={CourseContent}
                        children={() => <CourseContent onTapItem={onTapLessonItem} />}
                        options={{ title: i18n.t('contents') }} />
                    <Tab.Screen
                        name={Routes.CourseRatingTab}
                        children={() => <CourseRatingTab />}
                        options={{ title: i18n.t('rating') }} />
                </Tab.Navigator>
            </View>
        )
    }

    const loadStatus = status?.loadStatus ?? LoadStatus.idle;

    return (
        <ScreenContainer style={{ ...Styles.fullScreen, }}>
            <View style={{ height: '100%' }}>
                <CAppBar
                    title={course.title}
                    trailing={
                        <CIonIcon
                            name={IconName.mdShare}
                            onPress={() => onShare(course)} />}
                />
                {
                    loadStatus == LoadStatus.loading ? <CLoadingIndicator />
                        : loadStatus == LoadStatus.error ? <ErrorBack text={status.message} />
                            : build()
                }
            </View>
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
