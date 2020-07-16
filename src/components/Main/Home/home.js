import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
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
import SectionCourses from '../../Courses/SectionCourses/section-courses'
import HomeAppBar from '../../Common/AppBar/home-app-bar'
import i18n from '../../../res/i18n'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import Routes from '../../../routes/routes'
import { CoursesContext } from '../../../provider/courses-provider'
import { CourseType } from '../../../data/mock/courses-mock-data'
import ContentContainer from '../../Common/Screen/content-container'
import { useSelector, useDispatch } from 'react-redux'
import { DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, DoGetTotalNumerCoursesCourseAction, SetStatusCourseAction } from '../../../redux/course/actions'
import { LoadStatus, Status } from '../../../core/status'
import { SetStatusAuthAction } from '../../../redux/auth/actions'

const Home = ({ props }) => {

    const courseState = useSelector(state => state.courseState)

    const [text, setText] = useState('Initial')

    const dispatch = useDispatch();

    useEffect(() => {

        const loadTotalNumerCourseStatus = courseState.status[DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION]

        console.log('DEBUG', loadTotalNumerCourseStatus.loadStatus);

        switch (loadTotalNumerCourseStatus.loadStatus) {
            case LoadStatus.loading:
                setText('loading')
                break;
            case LoadStatus.error:
                setText('error' + loadTotalNumerCourseStatus.message)
                break;
            case LoadStatus.success:
                setText('success' + loadTotalNumerCourseStatus.message)
                break;
        }

        return () => {
            //cleanup
        }
    }, [courseState])

    const coursesState = useContext(CoursesContext)

    var allCourses = Array.from(coursesState.courses.values());

    const onNewReleasesPressed = () => {
        RootNavigation.navigate(Routes.NewReleasesScreen)
    }

    const buildSectionCourses = (title, type) => {
        var data = allCourses.filter((course) => course.type === type).map(value => value.id)
        return (
            data.length == 0 ?
                <View /> :
                <SectionCourses
                    headerText={title}
                    data={data}
                    style={styles.sectionCourses} />
        )
    }

    const buildContinueLearning = (title) => {
        var data = Array.from(coursesState.learningCourseIds);
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
                    <CText>{text}</CText>
                    <CImageButton
                        uri={Strings.defaultCourseThubnail}
                        style={styles.coursesBanner}
                        height={'15%'}
                        onPress={onNewReleasesPressed}>
                        <CText data={i18n.t('new_release')} style={{ ...TextStyles.headline, color: Colors.white }} />
                    </CImageButton>
                    {buildContinueLearning(i18n.t('continue_learning'))}
                    {buildSectionCourses(i18n.t('software_development'), CourseType.SOFTWARE_DEVELOPMENT)}
                    <SizedBox height={Sizes.s12} />
                    {buildSectionCourses(i18n.t('it_operations'), CourseType.IT_OPERATIONS)}
                    {buildSectionCourses(i18n.t('data_professional'), CourseType.DATA_PROFESSIONAL)}
                    {buildSectionCourses(i18n.t('security_professional'), CourseType.SECURITY_PROFESSIONAL)}
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
