import React from 'react'
import { StyleSheet } from 'react-native'
import authorsData from '../../../data/mock/authos-mock-data'
import CFlatList from '../../Common/Container/c-flat-list'
import CDivider from '../../Common/Container/c-divider'
import Sizes from '../../../globals/sizes'
import ProfileTile from '../../Common/Profile/profile-tile'
import ProfileTileVer from '../../Common/Profile/profile-tile-ver'
import Strings from '../../../globals/strings'
import CAvatar from '../../Common/Image/c-avatar'
import Alignment from '../../../globals/alignment'
import { Chip } from 'react-native-paper'

const ListAuthors = ({ horizontal = false, headerText, chip = false }) => {

    const buildItem = (author) => {
        return (
            horizontal ?
                (chip ?
                    <Chip
                        style={styles.teacherAvatar}
                        avatar={<CAvatar uri={Strings.defaultAvatar} size={Sizes.s24} />}
                        onPress={() => console.log('Pressed')}>
                        {author.name}
                    </Chip> : <ProfileTileVer
                        title={author.name}
                        image={author.avatar}
                        style={styles.authorItemVer} />) :
                <ProfileTile
                    title={author.name}
                    subtitle={`${author.coursesCount} Courses`}
                    image={author.avatar}
                    style={styles.authorItem} />
        )
    }

    return (
        <CFlatList
            headerText={headerText}
            data={authorsData}
            horizontal={horizontal}
            renderItem={({ item }) => buildItem(item)}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <CDivider marginHorizontal={Sizes.s4}/>}
            hasTrailing={false} />
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
    },
    teacherAvatar: {
        alignSelf: Alignment.baseLine,
    },
})
