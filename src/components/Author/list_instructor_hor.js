import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CChip from '../Common/Container/c-chip'
import ProfileTileVer from '../Common/Profile/profile-tile-ver'
import CFlatList from '../Common/Container/c-flat-list'
import CDivider from '../Common/Container/c-divider'
import Sizes from '../../res/sizes'

export default function ListInstructorHor({
    instructors
}) {

    const buildItem = (author) => {
        return (
            <ProfileTileVer
                title={author['user.name']}
                image={author['user.avatar']}
                style={styles.authorItemVer}
            />
        )
    }


    return (
        <CFlatList
            data={instructors}
            horizontal={true}
            renderItem={({ item }) => {
                return buildItem(item)
            }}
            keyExtractor={item => item}
            ItemSeparatorComponent={() => <CDivider marginHorizontal={Sizes.s4} />}
            hasTrailing={false} />
    )
}

const styles = StyleSheet.create({})
