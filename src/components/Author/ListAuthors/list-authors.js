import React from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../globals/styles'
import authorsData from '../../../data/mock/authos-mock-data'
import CFlatList from '../../Common/Container/c-flat-list'
import CDivider from '../../Common/Container/c-divider'
import Sizes from '../../../globals/sizes'
import ProfileTile from '../../Common/Profile/profile-tile'
import ProfileTileVer from '../../Common/Profile/profile-tile-ver'
import CText from '../../Common/Text/c-text'

const ListAuthors = ({ horizontal = false , headerText}) => {

    const buildItem = (author) => {
        return (
            horizontal ?
                <ProfileTileVer
                    title={author.name}
                    image={author.avatar}
                    style={styles.authorItemVer} /> :
                <ProfileTile
                    title={author.name}
                    subtitle={`${author.coursesCount} Courses`}
                    image={author.avatar}
                    style={styles.authorItem} />
        )
    }

    return (
        <View style={Styles.fullScreen}>
            <CFlatList
                headerText={headerText}
                data={authorsData}
                horizontal={horizontal}
                renderItem={
                    ({ item }) => buildItem(item)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <CDivider />} />
        </View>
    )
}

export default ListAuthors

const styles = StyleSheet.create({
    authorItem: {
        paddingVertical: Sizes.s16,
        paddingHorizontal: Sizes.s24
    },
    authorItemVer: {
        width: Sizes.s100
    }
})
