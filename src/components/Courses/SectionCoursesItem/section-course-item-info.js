import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextStyles from '../../../res/styles/text-styles'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import FlexDirection from '../../../res/styles/flex-direction'
import CText from '../../Common/Text/c-text'
import { CRating, RatingType } from '../../Common/Rating/c-rating'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import { DateFormat } from '../../../utils/date-format'
import ContentContainer from '../../Common/Screen/content-container'
import CChip from '../../Common/Container/c-chip'
import i18n from '../../../res/i18n'

const SectionCourseItemInfo = ({ course, simple = false, authorChip = false }) => {
    return (
        <ContentContainer style={styles.container}>
            <CText data={course.title ?? course.courseTitle} style={TextStyles.subhead} />
            <SizedBox height={Sizes.s2} />
            {
                !simple &&
                <View>
                    <SizedBox height={Sizes.s4} />
                    <CChip title={`${course['instructor.user.name'] ?? course.instructor?.name ?? ''}`} />
                    <SizedBox height={Sizes.s4} />
                </View>
            }

            <SizedBox height={Sizes.s2} />
            <View style={styles.row}>
                <CText data={course.level} style={TextStyles.caption} />
                <SizedBox width={Sizes.s4} />
                <CText data={DateFormat.toMdy(course.date)} style={TextStyles.caption} />
                <SizedBox width={Sizes.s4} />
                <CText data={`${course.totalHours} hours`} style={TextStyles.caption} />
            </View>
            <SizedBox height={Sizes.s8} />
            {
                !simple &&
                <View style={styles.row}>
                    <CChip
                        leadingText={`${course.soldNumber ?? 0}`}
                        title={i18n.t('sold')} />
                    <SizedBox width={Sizes.s4} />
                    <CChip
                        leadingText={`${course.ratedNumber ?? 0}`}
                        title={i18n.t('rated')} />
                    <SizedBox width={Sizes.s4} />
                    <CChip
                        leadingText={`${course.totalHours ?? 0}`.substr(0, 3)}
                        title={i18n.t('hours')} />
                    <SizedBox width={Sizes.s4} />
                </View>
            }
        </ContentContainer>
    )
}

export default SectionCourseItemInfo

const styles = StyleSheet.create({
    container: {
        alignItems: Alignment.flexStart,
    },
    row: {
        flexDirection: FlexDirection.row
    }
})
