import React, { useContext } from 'react'
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

const Tab = createMaterialTopTabNavigator()

const CourseDetail = ({ route }) => {

    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    var course = route.params.course

    console.log('received', course.authors)

    const onShare = () => {
        ShareUtils.share({ message: course.name })
    };

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar
                title={course.name}
                trailing={
                    <CIonIcon
                        name={IconName.mdShare}
                        onPress={onShare} />} />
            <VideoView uri={course.image} style={styles.videoView} />
            <CScrollView
                style={Styles.screenContainer}>
                <SizedBox height={Sizes.s10} />
                <SectionCourseItemInfo course={course} simple={true} />
                <SizedBox height={Sizes.s8} />
                <ListAuthors
                    authorIds={course.authors}
                    horizontal={true}
                    chip={true} />
                <SizedBox height={Sizes.s8} />
                <CourseActions
                    courseId={course.id ?? ''}
                    style={styles.courseActions} />
                <SizedBox height={Sizes.s8} />
                <CText data={course.introduce} />
                <SizedBox height={Sizes.s12} />
                <CButton title={i18n.t('take_a_learning_check')} color={Colors.gray} />
                <SizedBox height={Sizes.s8} />
                <CButton title={i18n.t('view_related_paths_and_courses')} color={Colors.gray} />
                <SizedBox height={Sizes.s8} />
                <View style={{ height: Sizes.s420 }}>
                    <Tab.Navigator
                        tabBarOptions={{
                            contentContainerStyle: { backgroundColor: theme.tabColor },
                            activeTintColor: theme.textColor,
                            inactiveTintColor: theme.textColor,
                        }}>
                        <Tab.Screen name={Routes.CourseContent} component={CourseContent} options={{ title: i18n.t('contents') }} />
                        <Tab.Screen name={Routes.CourseTranscript} component={CourseTranscript} options={{ title: i18n.t('transcript') }} />
                    </Tab.Navigator>
                </View>
            </CScrollView>
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
