import React from 'react'
import SectionCourseItem from '../SectionCoursesItem/section-courses-item';
import CFlatList from '../../Common/Container/c-flat-list';
import SizedBox from '../../Common/Container/sized-box';
import Sizes from '../../../res/sizes';
import Routes from '../../../routes/routes';
import { RootNavigation } from '../../../routes/navigations/root-navigation';
import i18n from '../../../res/i18n';

const SectionCourses = ({ style, headerText, data }) => {

    const onTrailingPressed = () => {
        RootNavigation.navigate(Routes.ListCoursesScreen, {
            title: headerText,
        })
    }

    return (
        <CFlatList
            headerText={headerText}
            style={style}
            horizontal={true}
            data={data}
            renderItem={({ item }) =>
                <SectionCourseItem
                    key={item.id}
                    course={item}
                    onPress={() => {
                        RootNavigation.navigate(Routes.CourseDetail, {
                            course: item
                        })
                    }}
                />
            }
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <SizedBox width={Sizes.s12} />}
            trailingText={i18n.t('see_all')}
            onTrailingPress={onTrailingPressed} />
    )
}

export default SectionCourses
