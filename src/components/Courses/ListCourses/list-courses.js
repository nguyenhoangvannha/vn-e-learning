import React from 'react'
import { Icon } from 'react-native-elements';
import CFlatList from '../../Common/Container/c-flat-list';
import SizedBox from '../../Common/Container/sized-box';
import Sizes from '../../../globals/sizes';
import TextStyles from '../../../globals/text-styles';
import Colors from '../../../globals/colors';
import ListCoursesItems from '../ListCoursesItem/list-courses-item'
import CDivider from '../../Common/Container/c-divider';
import CFlatButton from '../../Common/Button/c-flat-button';

const ListCourses = ({ style, headerText, data }) => {

    const trailing = <CFlatButton
        title='See All'
        titleStyle={TextStyles.caption}
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
            headerStyle={TextStyles.caption}
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

