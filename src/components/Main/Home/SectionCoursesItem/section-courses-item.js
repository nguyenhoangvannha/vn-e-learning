import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import CCard from '../../../Common/Container/c-card'
import CImage from '../../../Common/Image/c-image'
import Sizes from '../../../../globals/sizes'
import SectionCourseItemInfo from './section-course-item-info'
import COpacityButton from '../../../Common/Button/c-opacity-button'

const SectionCourseItem = ({ style, course , onPress}) => {
    return (
        <COpacityButton onPress={onPress}>
            <CCard style={style}>
            <View>
                <CImage uri={course.image} style={styles.image} />
                <View style={styles.infoContainer}>
                    <SectionCourseItemInfo course={course} />
                </View>
            </View>
        </CCard>
        </COpacityButton>
    )
}

export default SectionCourseItem

const styles = StyleSheet.create({
    image: {
        height: Sizes.s96,
    },
    infoContainer: {
        padding: Sizes.s8,
    }
})
