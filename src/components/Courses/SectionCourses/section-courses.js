import React, { useContext } from 'react'
import SectionCourseItem from '../SectionCoursesItem/section-courses-item';
import CFlatList from '../../Common/Container/c-flat-list';
import SizedBox from '../../Common/Container/sized-box';
import Sizes from '../../../res/sizes';
import Routes from '../../../routes/routes';
import { RootNavigation } from '../../../routes/navigations/root-navigation';
import i18n from '../../../res/i18n';
import { CoursesContext } from '../../../provider/courses-provider';

const SectionCourses = ({ style, headerText, data }) => {

    const coursesContext = useContext(CoursesContext)

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
                var course = coursesContext.courses.get(item)
                return <SectionCourseItem
                    key={course.id}
                    course={course}
                    onPress={() => {
                        coursesContext.addLearningCourse(item)
                        RootNavigation.navigate(Routes.CourseDetail, {
                            course: course
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

export default SectionCourses
