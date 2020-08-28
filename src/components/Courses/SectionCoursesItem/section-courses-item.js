import React from 'react'
import { StyleSheet, View } from 'react-native'
import Sizes from '../../../res/sizes'
import COpacityButton from '../../Common/Button/c-opacity-button'
import CCard from '../../Common/Container/c-card'
import CImage from '../../Common/Image/c-image'
import SectionCourseItemInfo from './section-course-item-info'
import ContentContainer from '../../Common/Screen/content-container'

const SectionCourseItem = ({ course, onPress }) => {
    return (
        <ContentContainer>
            <COpacityButton onPress={onPress}>
                <CCard>
                    <View style={{ width: 260, height: 220 }}>
                        <CImage uri={course.imageUrl} style={styles.image} />
                        <ContentContainer

                            style={styles.infoContainer}>
                            <SectionCourseItemInfo course={course}
                                simple={false} />
                        </ContentContainer>
                    </View>
                </CCard>
            </COpacityButton>
        </ContentContainer>
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
