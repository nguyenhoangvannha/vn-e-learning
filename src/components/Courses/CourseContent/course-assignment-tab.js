import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../../res/colors'
import Sizes from '../../../res/sizes'
import ContentContainer from '../../Common/Screen/content-container'
import { useSelector, useDispatch } from 'react-redux'
import CText from '../../Common/Text/c-text'
import i18n from '../../../res/i18n'
import CFlatList from '../../Common/Container/c-flat-list'
import SizedBox from '../../Common/Container/sized-box'
import CDivider from '../../Common/Container/c-divider'
import ListTileText from '../../Common/Container/list-tile-text'
import CImage from '../../Common/Image/c-image'
import Strings from '../../../res/strings'
import CChip from '../../Common/Container/c-chip'
import CAvatar from '../../Common/Image/c-avatar'

export const RatingItem = ({ model }) => {
    return (
        <ListTileText
            title={model.user?.name ?? ''}
            subtitle={model.content ?? ''}
            leading={<CAvatar
                uri={model.user?.avatar ?? Strings.defaultAvatar}
                size={Sizes.s48}
            />}
            trailing={<CChip title={model.averagePoint} />}
        />
    )
}

const CourseAssignmentTab = ({ onTapItem }) => {
    const courseState = useSelector(state => state.courseState)

    const course = courseState.courses[courseState.currentCourseId]

    const ratings = course.ratings?.ratingList ?? []

    return (
        <ContentContainer style={styles.container}>
            {
                ratings.length == 0 ? <CText data={i18n.t('no_ratings')} />
                    : <CFlatList
                        data={ratings ?? []}
                        hasTrailing={false}
                        horizontal={false}
                        renderItem={({ item }) => {
                            return <RatingItem model={item} />;
                        }}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <CDivider containerHeight={Sizes.s18}/>}
                    />
            }
        </ContentContainer>
    )
}

export default CourseAssignmentTab

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        padding: Sizes.s16,
    }
})
