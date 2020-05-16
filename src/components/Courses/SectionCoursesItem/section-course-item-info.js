import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextStyles from '../../../globals/text-styles'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../globals/sizes'
import Alignment from '../../../globals/alignment'
import FlexDirection from '../../../globals/flex-direction'
import CText from '../../Common/Text/c-text'
import { CRating, RatingType } from '../../Common/Rating/c-rating'
import ListAuthors from '../../Author/ListAuthors/list-authors'

const SectionCourseItemInfo = ({ course, simple = false, authorChip = false }) => {
    return (
        <View style={styles.container}>
            <CText data={course.name} style={TextStyles.subhead} />
            <SizedBox height={Sizes.s2} />
            {
                !simple && (authorChip ? <ListAuthors
                    horizontal={true}
                    chip={true} /> : <CText data={course.teachers} style={TextStyles.caption} />)
            }
            <SizedBox height={Sizes.s2} />
            <View style={styles.row}>
                <CText data={course.level} style={TextStyles.caption} />
                <SizedBox width={Sizes.s4} />
                <CText data={course.date.toString()} style={TextStyles.caption} />
                <SizedBox width={Sizes.s4} />
                <CText data={course.length} style={TextStyles.caption} />
            </View>
            <SizedBox height={Sizes.s4} />
            {
                !simple && <View style={styles.row}>
                    <CRating
                        readonly={true}
                        type={RatingType.star}
                        ratingCount={course.rating} />
                    <SizedBox width={Sizes.s4} />
                    <CText data={`(${course.ratingCount})`} style={TextStyles.caption} />
                </View>
            }
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
