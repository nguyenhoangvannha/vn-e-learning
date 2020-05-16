import React from 'react'
import { Icon } from 'react-native-elements';
import CFlatList from '../../Common/Container/c-flat-list';
import SizedBox from '../../Common/Container/sized-box';
import Sizes from '../../../globals/sizes';
import TextStyles from '../../../globals/text-styles';
import Colors from '../../../globals/colors';
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
import CDivider from '../../Common/Container/c-divider';
import CFlatButton from '../../Common/Button/c-flat-button';
import coursesData from '../../../data/mock/courses-mock-data';

const ListCourses = ({ navigation, style, headerText, hasTrailing = true, data }) => {

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
            data={data ?? coursesData}
            headerText={headerText}
            headerStyle={TextStyles.caption}
            style={style}
            horizontal={false}
            renderItem={({ item }) => <ListCoursesItem course={item} navigation={navigation}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <SizedBox height={Sizes.s4}><CDivider /></SizedBox>}
            trailing={ hasTrailing ? trailing : undefined}
        />
    )
}

export default ListCourses

