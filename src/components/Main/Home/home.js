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
import {  DO_GET_TOP_NEW_COURSE_ACTION } from '../../../feature/course/actions'
import { LoadStatus, Status } from '../../../core/status'

const Home = ({ props }) => {

    const courseState = useSelector(state => state.courseState)

    var allCourses = courseState.courses;

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false)


    useEffect(() => {

        const loadTopNewCoursesStatus = courseState.status[DO_GET_TOP_NEW_COURSE_ACTION]

        console.log('DEBUG DO_GET_TOP_NEW_COURSE_ACTION', courseState.topNewCourses)

        switch (loadTopNewCoursesStatus.loadStatus) {
            case LoadStatus.loading:
                setLoading(true)
                break;
            case LoadStatus.error:
                setLoading(false)
                break;
            case LoadStatus.success:
                setLoading(false)
                console.log('DEBUG COURSE STATE', courseState)
                break;
        }

        return () => {
            //cleanup
        }
    }, [courseState])

    const onNewReleasesPressed = () => {
        RootNavigation.navigate(Routes.NewReleasesScreen)
    }

    const buildSectionCourses = (title) => {
        var courseIds = Object.keys(allCourses)

        console.log('DEBUG BUILD', courseIds);
        return (
            courseIds.length == 0 ?
                <View /> :
                <SectionCoursesByIds
                    headerText={title}
                    courseIds={courseIds}
                    style={styles.sectionCourses} />
        )
    }

    const buildContinueLearning = (title) => {
        return <View />
        var data = Array.from(courseState.learningCourseIds);
        return (
            data.length == 0 ?
                <View /> :
                <SectionCourses
                    headerText={title}
                    data={data}
                    style={styles.sectionCourses} />
        )
    }

    return (
        <ContentContainer style={Styles.fullScreen}>
            <HomeAppBar title={i18n.t('home')} hasBack={false} />
            <CScrollView>
                <View style={Styles.screenContainer}>
                    <CImageButton
                        uri={Strings.defaultCourseThubnail}
                        style={styles.coursesBanner}
                        height={'15%'}
                        onPress={onNewReleasesPressed}>
                        <CText data={i18n.t('new_release')} style={{ ...TextStyles.headline, color: Colors.white }} />
                    </CImageButton>
                    {buildContinueLearning(i18n.t('continue_learning'))}
                    {buildSectionCourses(i18n.t('software_development'),)}
                    <SizedBox height={Sizes.s12} />
                    {buildSectionCourses(i18n.t('it_operations'),)}
                    {buildSectionCourses(i18n.t('data_professional'),)}
                    {buildSectionCourses(i18n.t('security_professional'),)}
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
