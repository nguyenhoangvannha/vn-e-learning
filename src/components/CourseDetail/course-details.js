import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from '../../globals/styles'
import VideoView from '../Common/Video/video-view'
import Sizes from '../../globals/sizes'
import CText from '../Common/Text/c-text'
import TextStyles from '../../globals/text-styles'
import CScrollView from '../Common/Container/c-scroll-view'
import FontWeight from '../../globals/font-weight'
import { Chip } from 'react-native-paper'
import CAvatar from '../Common/Image/c-avatar'
import Strings from '../../globals/strings'
import SizedBox from '../Common/Container/sized-box'
import Alignment from '../../globals/alignment'
import SectionCourseItemInfo from '../Main/Home/SectionCoursesItem/section-course-item-info'
import CourseActions from '../Courses/CourseActions/course-actions'
import coursesData from '../../data/mock/courses-mock-data'

const CourseDetail = ({ navigation, route }) => {
    var course = route.params.course ?? coursesData[0]
    navigation.setOptions({title: course.name})
    return (
        <View style={Styles.fullScreen}>
            <VideoView uri={course.image} style={styles.videoView} />
            <CScrollView style={Styles.screenContainer}>
                <SizedBox height={Sizes.s10} />
                <SectionCourseItemInfo course={course} simple={true}/>
                <SizedBox height={Sizes.s8}/>
                <Chip
                    style={styles.teacherAvatar}
                    avatar={<CAvatar uri={Strings.defaultAvatar} size={Sizes.s24} />}
                    onPress={() => console.log('Pressed')}>
                    {course.teachers}
                </Chip>
                <SizedBox height={Sizes.s8}/>
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

})
