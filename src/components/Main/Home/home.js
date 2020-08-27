import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import Sizes from '../../../res/sizes'
import SizedBox from '../../Common/Container/sized-box'
import CScrollView from '../../Common/Container/c-scroll-view'
import CImageButton from '../../Common/Button/c-image-button'
import Strings from '../../../res/strings'
import CText from '../../Common/Text/c-text'
import Alignment from '../../../res/styles/alignment'
import TextStyles from '../../../res/styles/text-styles'
import Colors from '../../../res/colors'
import SectionCourses, { SectionCoursesByIds } from '../../Courses/SectionCourses/section-courses'
import HomeAppBar from '../../Common/AppBar/home-app-bar'
import i18n from '../../../res/i18n'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import Routes from '../../../routes/routes'
import ContentContainer from '../../Common/Screen/content-container'
import { useSelector, useDispatch } from 'react-redux'
import { DO_GET_TOP_NEW_COURSE_ACTION, DoGetRecommendCourseCourseAction, DO_GET_RECOMMEND_COURSE_COURSE_ACTION, DO_GET_TOP_SELL_COURSE_ACTION, DO_GET_TOP_RATE_COURSE_ACTION } from '../../../feature/course/actions'
import { LoadStatus, Status } from '../../../core/status'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'
import CFlatButton from '../../Common/Button/c-flat-button'
import { ActivityIndicator } from 'react-native-paper'

const Home = ({ props }) => {

    const courseState = useSelector(state => state.courseState)


    const dispatch = useDispatch();

    const [topNewStatus, setTopNewStatus] = useState(Status.idle())

    const [recommendCoursesStatus, setRecommendCoursesStatus] = useState(Status.idle())

    const [topSellStatus, setTopSellStatus] = useState(Status.idle())

    const [topRateStatus, setTopRateStatus] = useState(Status.idle())


    useEffect(() => {

        setTopNewStatus(courseState.status[DO_GET_TOP_NEW_COURSE_ACTION])

        setRecommendCoursesStatus(courseState.status[DO_GET_RECOMMEND_COURSE_COURSE_ACTION])

        setTopSellStatus(courseState.status[DO_GET_TOP_SELL_COURSE_ACTION])

        setTopRateStatus(courseState.status[DO_GET_TOP_RATE_COURSE_ACTION])

        return () => {
            //cleanup
        }
    }, [courseState])

    const onNewReleasesPressed = () => {
        RootNavigation.navigate(Routes.NewReleasesScreen)
    }

    const buildSectionCourses = (title, courseIds, loadStatus) => {
        return (
            courseIds.length == 0 ?
                <View /> :
                loadStatus == LoadStatus.loading ?
                    <ActivityIndicator /> :
                    <SectionCoursesByIds
                        headerText={title}
                        courseIds={courseIds}
                        style={styles.sectionCourses} />
        )
    }

    const buildContinueLearning = (title, courseIds) => {
        return (
            courseIds.length == 0 ?
                <View /> :
                <SectionCoursesByIds
                    headerText={title}
                    courseIds={courseIds}
                    style={styles.sectionCourses} />
        )
    }

    return (
        <ContentContainer style={Styles.fullScreen}>
            <HomeAppBar title={i18n.t('home')} hasBack={false} />
            <CScrollView>
                <View style={Styles.screenContainer}>
                    {buildContinueLearning(i18n.t('continue_learning'), courseState.continuesLearningIds)}
                    {buildSectionCourses(i18n.t('recommend_for_you'), courseState.recommendCourses, recommendCoursesStatus.loadStatus)}
                    <SizedBox height={Sizes.s12} />
                    {buildSectionCourses(i18n.t('top_new_courses'), courseState.topNewCourses, topNewStatus.loadStatus)}
                    <SizedBox height={Sizes.s12} />
                    {buildSectionCourses(i18n.t('top_sell_courses'), courseState.topSellCourses, topSellStatus.loadStatus)}
                    <SizedBox height={Sizes.s12} />
                    {buildSectionCourses(i18n.t('top_rate_courses'), courseState.topRateCourses, topRateStatus.loadStatus)}
                    <SizedBox height={Sizes.s160} />
                </View>
            </CScrollView>
        </ContentContainer>
    )

}

export default Home

const styles = StyleSheet.create({
    coursesBanner: {
        height: '15%',
        justifyContent: Alignment.center,
        alignItems: Alignment.center
    },
    sectionCourses: {
        padding: Sizes.s8,
    },
})
