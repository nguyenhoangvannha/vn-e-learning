import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextStyles from '../../../res/styles/text-styles'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import FlexDirection from '../../../globals/flex-direction'
import CText from '../../Common/Text/c-text'
import { CRating, RatingType } from '../../Common/Rating/c-rating'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import { DateFormat } from '../../../utils/date-format'
import ContentContainer from '../../Common/Screen/content-container'

const SectionCourseItemInfo = ({ course, simple = false, authorChip = false }) => {

    return (
        <ContentContainer style={styles.container}>
            <CText data={course.name} style={TextStyles.subhead} />
            <SizedBox height={Sizes.s2} />
            {
                !simple && (
                    authorChip ?
                        <ListAuthors
                            authorIds={course.authors}
                            horizontal={true}
                            chip={true} /> :
                        <CText data={course.teachers} style={TextStyles.caption} />)
            }
            <SizedBox height={Sizes.s2} />
            <View style={styles.row}>
                <CText data={course.level} style={TextStyles.caption} />
                <SizedBox width={Sizes.s4} />
                <CText data={DateFormat.toMdy(course.date)} style={TextStyles.caption} />
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
        </ContentContainer>
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
