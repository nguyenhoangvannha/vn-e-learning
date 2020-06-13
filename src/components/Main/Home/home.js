import React, { useContext } from 'react'
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
import SectionCourses from '../../Courses/SectionCourses/section-courses'
import HomeAppBar from '../../Common/AppBar/home-app-bar'
import i18n from '../../../res/i18n'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import Routes from '../../../routes/routes'
import { CoursesContext } from '../../../provider/courses-provider'
import { CourseType } from '../../../data/mock/courses-mock-data'

const Home = () => {

    const coursesState = useContext(CoursesContext)

    var allCourses = Array.from(coursesState.courses.values());

    const onNewReleasesPressed = () => {
        RootNavigation.navigate(Routes.NewReleasesScreen)
    }

    const buildSectionCourses = (title, type) => {
        var data = allCourses.filter((course) => course.type === type);
        return (
            <SectionCourses
                headerText={title}
                data={data}
                style={styles.sectionCourses} 
                type={type}/>
        )
    }

    return (
        <View style={Styles.fullScreen}>
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
                    {buildSectionCourses(i18n.t('software_development'), CourseType.SOFTWARE_DEVELOPMENT)}
                    <SizedBox height={Sizes.s12} />
                    {buildSectionCourses(i18n.t('it_operations'), CourseType.IT_OPERATIONS)}
                    {buildSectionCourses(i18n.t('data_professional'), CourseType.DATA_PROFESSIONAL)}
                    {buildSectionCourses(i18n.t('security_professional'), CourseType.SECURITY_PROFESSIONAL)}
                    <SizedBox height={Sizes.s160} />
                </View>
            </CScrollView>
        </View>
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
