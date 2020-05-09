import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CText from '../../../Common/Text/c-text'
import TextStyles from '../../../../globals/text-styles'
import SizedBox from '../../../Common/Container/sized-box'
import Sizes from '../../../../globals/sizes'
import { Rating } from 'react-native-elements'
import Alignment from '../../../../globals/alignment'
import FlexDirection from '../../../../globals/flex-direction'

const SectionCourseItemInfo = ({course}) => {
    return (
        <View style={styles.container}>
            <CText data={course.name} style={TextStyles.headLine} />
            <SizedBox height={Sizes.s2} />
            <CText data={course.teachers} style={TextStyles.description} />
            <View style={styles.row}>
                <CText data={course.level} style={TextStyles.description} />
                <SizedBox width={Sizes.s4} />
                <CText data={course.date.toString()} style={TextStyles.description} />
                <SizedBox width={Sizes.s4} />
                <CText data={course.length} style={TextStyles.description} />
            </View>
            <SizedBox height={Sizes.s4} />
            <View style={styles.row}>
                <Rating
                    type='star'
                    ratingCount={course.rating ?? 0}
                    imageSize={Sizes.s16} />
                <SizedBox width={Sizes.s4} />
                <CText data={`(${course.ratingCount})`} style={TextStyles.description} />
            </View>
        </View>
    )
}

export default SectionCourseItemInfo

const styles = StyleSheet.create({
    container: {
        alignItems: Alignment.flexStart
    },
    row: {
        flexDirection: FlexDirection.row
    }
})
