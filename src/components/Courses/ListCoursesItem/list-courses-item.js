import React from 'react'
import { StyleSheet, View } from 'react-native'
import CImage from '../../Common/Image/c-image'
import Sizes from '../../../res/sizes'
import FlexDirection from '../../../res/styles/flex-direction'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../res/styles/alignment'
import COpacityButton from '../../Common/Button/c-opacity-button'
import SectionCourseItemInfo from '../SectionCoursesItem/section-course-item-info'
import CourseActionsMenuButton from '../CourseActions/course-actions-menu-button'
import Expanded from '../../Common/Container/expanded'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import i18n from '../../../res/i18n'
import { DateFormat } from '../../../utils/date-format'

export const MyCourseItem = ({ style, course, onPress }) => {
    return (
        <COpacityButton style={{ ...styles.container, ...style }} onPress={() => onPress(course)}>
            <CImage uri={course.image ?? course.imageUrl ?? course.courseImage} style={styles.image} />
            <Expanded>
                <View>
                    <SizedBox height={Sizes.s8} />
                    <CText
                        data={course.courseTitle}
                        style={TextStyles.subhead} />
                    <SizedBox height={Sizes.s4} />
                    <CText
                        data={course.instructorName}
                        style={TextStyles.subtitle} />
                    <SizedBox height={Sizes.s4} />
                    <CText
                        data={`${i18n.t('process')} ${course.process}`}
                        style={TextStyles.subtitle} />
                    <SizedBox height={Sizes.s4} />
                    <CText
                        data={`${i18n.t('latest_tearn_time')} ${DateFormat.toString(course.latestLearnTime)}`}
                        style={TextStyles.subtitle} />
                </View>
            </Expanded>
            <SizedBox width={Sizes.s24} style={styles.trailingIcon}>
                <CourseActionsMenuButton courseId={course.id} />
            </SizedBox>
        </COpacityButton>
    )
}

const ListCoursesItem = ({ style, course, onPress }) => {

    return (
        <COpacityButton style={{ ...styles.container, ...style }} onPress={() => onPress(course)}>
            <CImage uri={course.image ?? course.imageUrl ?? course.courseImage} style={styles.image} />
            <Expanded>
                <SectionCourseItemInfo course={course} />
            </Expanded>
            <SizedBox width={Sizes.s24} style={styles.trailingIcon}>
                <CourseActionsMenuButton courseId={course.id} />
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
