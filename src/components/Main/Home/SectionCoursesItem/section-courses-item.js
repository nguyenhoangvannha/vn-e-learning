import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import CCard from '../../../Common/Container/c-card'
import CImage from '../../../Common/Image/c-image'
import Sizes from '../../../../globals/sizes'
import SectionCourseItemInfo from './section-course-item-info'

const SectionCourseItem = ({ style, course }) => {
    return (
        <CCard style={style} child={
            <View>
                <CImage uri={course.image} style={styles.image} />
                <View style={styles.infoContainer}>
                    <SectionCourseItemInfo course={course}/>
                </View>
            </View>
        } />
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
