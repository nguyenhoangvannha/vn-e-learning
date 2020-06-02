import React from 'react'
import { StyleSheet, View } from 'react-native'
import Sizes from '../../../res/sizes'
import COpacityButton from '../../Common/Button/c-opacity-button'
import CCard from '../../Common/Container/c-card'
import CImage from '../../Common/Image/c-image'
import SectionCourseItemInfo from './section-course-item-info'

const SectionCourseItem = ({ course, onPress }) => {
    return (
        <COpacityButton onPress={onPress}>
            <CCard>
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
