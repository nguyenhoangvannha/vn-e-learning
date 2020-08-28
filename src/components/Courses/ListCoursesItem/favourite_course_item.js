import React from 'react'
import { StyleSheet, View } from 'react-native'
import CImage from '../../Common/Image/c-image'
import Sizes from '../../../res/sizes'
import FlexDirection from '../../../res/styles/flex-direction'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../res/styles/alignment'
import COpacityButton from '../../Common/Button/c-opacity-button'
import Routes from '../../../routes/routes'
import CourseActionsMenuButton from '../CourseActions/course-actions-menu-button'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import TextStyles from '../../../res/styles/text-styles'
import i18n from '../../../res/i18n'
import CFlatList from '../../Common/Container/c-flat-list'
import CText from '../../Common/Text/c-text'
import CDivider from '../../Common/Container/c-divider'
import Expanded from '../../Common/Container/expanded'
import { useDispatch, useSelector } from 'react-redux'
import { SetCurrentCourseIdCourseAction, DoGetCourseDetailCourseAction, SetAddContinuesLearningCourseAction } from '../../../feature/course/actions'

export const FavouriteCourseList = ({ courses }) => {
    return (
        <CFlatList
            data={courses ?? []}
            hasTrailing={false}
            headerStyle={TextStyles.caption}
            horizontal={false}
            renderItem={({ item }) => {
                return <FavouriteCoursesItem course={item} />;
            }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <SizedBox height={Sizes.s4}><CDivider /></SizedBox>}
            contentContainerStyle={{ height: '100%' }}
        />
    )
}

const FavouriteCoursesItem = ({ style, course }) => {

    const dispatch =  useDispatch()

    const authState = useSelector(state => state.authState)

 
    const onPress = (course) => {
        dispatch(SetCurrentCourseIdCourseAction(course.id))
        dispatch(DoGetCourseDetailCourseAction(course.id, authState.userInfo.id))
        dispatch(SetAddContinuesLearningCourseAction(course.id))
        RootNavigation.navigate(Routes.CourseDetail, {
            courseId: course.id,
        });
    }

    return (
        <COpacityButton style={{ ...styles.container, ...style }} onPress={() => onPress(course)}>
            <CImage uri={course.courseImage} style={styles.image} />
            <Expanded>
                <View >
                    <CText data={course.courseTitle} style={TextStyles.subhead} />
                    <CText data={`${i18n.t('price')}  ${course.coursePrice}`} style={TextStyles.subhead} />
                    <CText data={`${i18n.t('instructor')} ${course.instructorName}`} style={TextStyles.subhead} />
                </View>
            </Expanded>
            {/* <SectionCourseItemInfo course={course} /> */}
            <SizedBox width={Sizes.s24} style={styles.trailingIcon}>
                <CourseActionsMenuButton courseId={course.id} />
            </SizedBox>
        </COpacityButton>
    )
}

export default FavouriteCoursesItem

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
