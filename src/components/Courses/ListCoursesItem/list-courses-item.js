import React from 'react'
import { StyleSheet } from 'react-native'
import CImage from '../../Common/Image/c-image'
import Sizes from '../../../res/sizes'
import FlexDirection from '../../../globals/flex-direction'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../res/styles/alignment'
import COpacityButton from '../../Common/Button/c-opacity-button'
import Routes from '../../../routes/routes'
import SectionCourseItemInfo from '../SectionCoursesItem/section-course-item-info'
import CourseActionsMenuButton from '../CourseActions/course-actions-menu-button'
import { RootNavigation } from '../../../routes/navigations/root-navigation'

const ListCoursesItem = ({ navigation, style, course }) => {

    const onPress = (course) => {
        RootNavigation.navigate(Routes.CourseDetail, {
            course: course,
        });
    }

    return (
        <COpacityButton style={{ ...styles.container, ...style }} onPress={() => onPress(course)}>
            <CImage uri={course.image} style={styles.image} />
            <SectionCourseItemInfo course={course} />
            <SizedBox width={Sizes.s24} style={styles.trailingIcon}>
                <CourseActionsMenuButton courseId={course.id}/>
            </SizedBox>
        </COpacityButton>
    )
}

export default ListCoursesItem

const styles = StyleSheet.create({
    container: {
        flexDirection: FlexDirection.row,
    },
    image: {
        height: Sizes.s68,
        width: Sizes.s84,
        margin: Sizes.s8
    },
    trailingIcon: {
        fontSize: Sizes.s20,
        alignSelf: Alignment.center
    }
})
