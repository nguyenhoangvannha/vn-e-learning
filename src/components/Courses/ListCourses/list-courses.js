import React from 'react'
import { Icon, Divider } from 'react-native-elements';
import CFlatList from '../../Common/Container/c-flat-list';
import SectionCourseItem from '../../Main/Home/SectionCoursesItem/section-courses-item';
import SizedBox from '../../Common/Container/sized-box';
import Sizes from '../../../globals/sizes';
import CButton from '../../Common/Button/c-button';
import TextStyles from '../../../globals/text-styles';
import Colors from '../../../globals/colors';
import ListCoursesItems from '../ListCoursesItem/list-courses-item'
import CDivider from '../../Common/Container/c-divider';
import CFlatButton from '../../Common/Button/c-flat-button';

const ListCourses = ({ style, headerText, data }) => {

    const trailing = <CFlatButton
        title='See All'
        titleStyle={TextStyles.description}
        trailing={
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
            headerStyle={TextStyles.description}
            style={style}
            horizontal={false}
            data={data}
            renderItem={({ item }) => <ListCoursesItems course={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <SizedBox height={Sizes.s4}><CDivider /></SizedBox>}
            trailing={trailing}
        />
    )
}

export default ListCourses

