import React from 'react'
import { StyleSheet, View, Share } from 'react-native'
import Styles from '../../../globals/styles'
import VideoView from '../../Common/Video/video-view'
import Sizes from '../../../globals/sizes'
import CScrollView from '../../Common/Container/c-scroll-view'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../globals/alignment'
import coursesData from '../../../data/mock/courses-mock-data'
import SectionCourseItemInfo from '../SectionCoursesItem/section-course-item-info'
import CAppBar from '../../Common/AppBar/c-app-bar'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import CIonIcon from '../../Common/Icon/c-ion-icon'
import IconName from '../../../globals/icon-name'
import CourseActions from '../CourseActions/course-actions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CourseContent from '../CourseContent/course-content'
import CourseTranscript from '../CourseTranscript/course-transcript'
import Routes from '../../../routes/routes'
import { ShareUtils } from '../../../utils/share-utils'
import CButton from '../../Common/Button/c-button'
import Colors from '../../../globals/colors'
import CText from '../../Common/Text/c-text'

const Tab = createMaterialTopTabNavigator()

const CourseDetail = ({ route }) => {

    var course = route.params.course ?? coursesData[0]

    const onShare = () => {
        ShareUtils.share({ message: course.name })
    };

    return (
        <View style={Styles.fullScreen}>
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
                    horizontal={true}
                    chip={true} />
                <SizedBox height={Sizes.s8} />
                <CourseActions style={styles.courseActions} />
                <SizedBox height={Sizes.s8} />
                <CText data='Ratings are used to collect measurable feedback from users. Use Rating over an Input where imagery can increase user interaction.' />
                <SizedBox height={Sizes.s12} />
                <CButton title='Take a learning check' color={Colors.gray} />
                <SizedBox height={Sizes.s8} />
                <CButton title='View related paths & courses' color={Colors.gray} />
                <SizedBox height={Sizes.s8} />
                <View style={{ height: Sizes.s420 }}>
                    <Tab.Navigator>
                        <Tab.Screen name={Routes.CourseContent} component={CourseContent} options={{ title: 'Contents' }} />
                        <Tab.Screen name={Routes.CourseTranscript} component={CourseTranscript} options={{ title: 'Transcript' }} />
                    </Tab.Navigator>
                </View>
            </CScrollView>
        </View>
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
