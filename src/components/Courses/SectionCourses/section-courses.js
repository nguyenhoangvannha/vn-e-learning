import React from 'react'
import SectionCourseItem from '../SectionCoursesItem/section-courses-item';
import * as RootNavigation from '../../../routes/navigations/root-navigation'
import CFlatList from '../../Common/Container/c-flat-list';
import SizedBox from '../../Common/Container/sized-box';
import Sizes from '../../../globals/sizes';
import CButton from '../../Common/Button/c-button';
import TextStyles from '../../../globals/text-styles';
import Colors from '../../../globals/colors';
import CIonIcon from '../../Common/Icon/c-ion-icon';
import IconName from '../../../globals/icon-name';
import Routes from '../../../routes/routes';

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
            renderItem={({ item }) => <SectionCourseItem course={item} onPress={() => {
                RootNavigation.navigate(Routes.CourseDetail, {
                    course: item
                })
            }} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <SizedBox width={Sizes.s12} />}
            trailingText='See All'
            onTrailingPress={onTrailingPressed} />
    )
}

export default SectionCourses
