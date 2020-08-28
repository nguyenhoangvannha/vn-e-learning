import React, { useContext } from 'react'
import SectionCourseItem from '../SectionCoursesItem/section-courses-item';
import CFlatList from '../../Common/Container/c-flat-list';
import SizedBox from '../../Common/Container/sized-box';
import Sizes from '../../../res/sizes';
import Routes from '../../../routes/routes';
import { RootNavigation } from '../../../routes/navigations/root-navigation';
import i18n from '../../../res/i18n';
import { CoursesContext } from '../../../provider/courses-provider';
import { useSelector, useDispatch } from 'react-redux'
import { DoGetCourseDetailCourseAction, SetCurrentCourseIdCourseAction, SetAddContinuesLearningCourseAction } from '../../../feature/course/actions';

export const SectionCoursesByIds = ({ style, headerText, courseIds }) => {

    const authState = useSelector(state => state.authState)

    const courseState = useSelector(state => state.courseState)

    var allCourses = courseState.courses;

    const dispatch = useDispatch();

    const onTrailingPressed = () => {
        RootNavigation.navigate(Routes.ListCoursesByTypeScreen, {
            title: headerText,
            courseIds: courseIds,
        })
    }

    return (
        <CFlatList
            headerText={headerText}
            style={style}
            horizontal={true}
            data={courseIds}
            renderItem={({ item }) => {
                var course = allCourses[item]
                return <SectionCourseItem
                    key={course.id}
                    course={course}
                    onPress={() => {
                        dispatch(SetCurrentCourseIdCourseAction(course.id))

                        dispatch(DoGetCourseDetailCourseAction(course.id, authState.userInfo.id))
                        
                        dispatch(SetAddContinuesLearningCourseAction(course.id))

                        RootNavigation.navigate(Routes.CourseDetail, {
                            courseId: course.id
                        })
                    }}
                />
            }
            }
            keyExtractor={item => item}
            ItemSeparatorComponent={() => <SizedBox width={Sizes.s12} />}
            trailingText={i18n.t('see_all')}
            onTrailingPress={onTrailingPressed} />
    )
}

const SectionCourses = ({ style, headerText, data , hasTrailing  = true}) => {
    const authState = useSelector(state => state.authState)
    
    const dispatch = useDispatch();

    const onTrailingPressed = () => {
        RootNavigation.navigate(Routes.ListCoursesByTypeScreen, {
            title: headerText,
            courseIds: data,
        })
    }

    return (
        <CFlatList
            headerText={headerText}
            style={style}
            horizontal={true}
            data={data}
            renderItem={({ item }) => {
                var course = item
                return <SectionCourseItem
                    key={course.id}
                    course={course}
                    onPress={() => {
                        dispatch(SetCurrentCourseIdCourseAction(course.id))

                        dispatch(DoGetCourseDetailCourseAction(course.id, authState.userInfo.id))

                        dispatch(SetAddContinuesLearningCourseAction(course.id))
                        
                        RootNavigation.navigate(Routes.CourseDetail, {
                            courseId: course.id
                        })
                    }}
                />
            }
            }
            keyExtractor={item => item}
            ItemSeparatorComponent={() => <SizedBox width={Sizes.s12} />}
            trailingText={i18n.t('see_all')}
            hasTrailing={hasTrailing}
            onTrailingPress={onTrailingPressed} />
    )
}

export default SectionCourses
