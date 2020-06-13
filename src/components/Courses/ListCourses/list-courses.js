import React from 'react'
import CFlatList from '../../Common/Container/c-flat-list';
import SizedBox from '../../Common/Container/sized-box';
import Sizes from '../../../res/sizes';
import TextStyles from '../../../res/styles/text-styles';
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
import CDivider from '../../Common/Container/c-divider';
import i18n from '../../../res/i18n';

const ListCourses = ({ navigation, style, headerText, hasTrailing = true, data }) => {

    return (
        <CFlatList
            data={data ?? []}
            headerText={headerText}
            trailingText={i18n.t('see_all')}
            hasTrailing={hasTrailing}
            headerStyle={TextStyles.caption}
            style={style}
            horizontal={false}
            renderItem={({ item }) => <ListCoursesItem course={item} navigation={navigation}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <SizedBox height={Sizes.s4}><CDivider /></SizedBox>}
        />
    )
}

export default ListCourses

