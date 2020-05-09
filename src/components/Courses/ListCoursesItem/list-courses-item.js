import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import CCard from '../../Common/Container/c-card'
import CImage from '../../Common/Image/c-image'
import Sizes from '../../../globals/sizes'
import SectionCourseItemInfo from '../../Main/Home/SectionCoursesItem/section-course-item-info'
import FlexDirection from '../../../globals/flex-direction'
import CIconButton from '../../Common/Button/c-icon-button'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../globals/alignment'

const ListCoursesItem = ({ style, course }) => {
    return (
        <View style={{...styles.container, ...style}}>
            <CImage uri={course.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <SectionCourseItemInfo course={course} />
            </View>
            <SizedBox width={Sizes.s24} style={styles.trailingIcon}>
                <CIconButton icon='more' style={styles.trailingIcon} />
            </SizedBox>
        </View>
    )
}

export default ListCoursesItem

const styles = StyleSheet.create({
    container: {
        flexDirection: FlexDirection.row,
    },
    image: {
        height: Sizes.s68,
        width: Sizes.s84,
        margin: Sizes.s8
    },
    infoContainer: {
        padding: Sizes.s8,
    },
    trailingIcon: {
        alignSelf: Alignment.center
    }
})
