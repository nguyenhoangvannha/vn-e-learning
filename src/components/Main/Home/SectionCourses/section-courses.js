import React from 'react'
import CFlatList from '../../../Common/Container/c-flat-list';
import SectionCourseItem from '../SectionCoursesItem/section-courses-item';
import SizedBox from '../../../Common/Container/sized-box';
import Sizes from '../../../../globals/sizes';
import CButton from '../../../Common/Button/c-button';
import TextStyles from '../../../../globals/text-styles';
import Colors from '../../../../globals/colors';
import { Icon } from 'react-native-elements';

const SectionCourses = ({ style , headerText, data}) => {

    const trailing = <CButton
        type='clear'
        title='See All'
        titleStyle={TextStyles.description}
        color={Colors.transparent}
        icon={
            <Icon
                name='chevron-right'
                size={15}
                color={Colors.bodyText}
            />
        }
        iconRight={true}
    />

    return (
        <CFlatList
            headerText={headerText}
            style={style}
            horizontal={true}
            data={data}
            renderItem={({ item }) => <SectionCourseItem course={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <SizedBox width={Sizes.s12} />}
            trailing={trailing}
        />
    )
}

export default SectionCourses
