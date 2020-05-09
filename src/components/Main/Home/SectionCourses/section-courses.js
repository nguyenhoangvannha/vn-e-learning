import React from 'react'
import CFlatList from '../../../Common/Container/c-flat-list';
import coursesData from './data';
import SectionCourseItem from '../SectionCoursesItem/section-courses-item';
import SizedBox from '../../../Common/Container/sized-box';
import Sizes from '../../../../globals/sizes';
import CText from '../../../Common/Text/c-text';

const SectionCourses = ({style}) => {
    return (
        <CFlatList
            headerText='IT Programing'
            style={style}
            horizontal={true}
            data={coursesData}
            renderItem={({ item }) => <SectionCourseItem course={item}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={()=><SizedBox width={Sizes.s12}/>}
            ListHeaderComponent={()=><CText data={'IT Operatos'}/>}
        />
    )
}

export default SectionCourses
