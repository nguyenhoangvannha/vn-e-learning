import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import CFlatList from '../../Common/Container/c-flat-list'
import CDivider from '../../Common/Container/c-divider'
import Sizes from '../../../res/sizes'
import ProfileTile from '../../Common/Profile/profile-tile'
import ProfileTileVer from '../../Common/Profile/profile-tile-ver'
import Strings from '../../../res/strings'
import CAvatar from '../../Common/Image/c-avatar'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import Routes from '../../../routes/routes'
import { AuthorsContext } from '../../../provider/authors-provider'
import CChip from '../../Common/Container/c-chip'

const ListAuthors = ({ horizontal = false, headerText, chip = false, authorIds }) => {

    const authorsContext = useContext(AuthorsContext)

    const onItemPressed = (author) => {
        RootNavigation.navigate(Routes.AuthorScreen, {
            author: author,
        })
    }

    const buildItem = (author) => {
        return (
            horizontal ?
                (chip ?
                    <CChip
                        leading={<CAvatar uri={Strings.defaultAvatar} size={Sizes.s24} />}
                        title={author.name}
                        onPress={() => onItemPressed(author)}>
                    </CChip> : <ProfileTileVer
                        title={author.name}
                        image={author.avatar}
                        style={styles.authorItemVer}
                        onPress={() => onItemPressed(author)} />) :
                <ProfileTile
                    title={author.name}
                    subtitle={`${author.coursesCount} Courses`}
                    image={author.avatar}
                    style={styles.authorItem}
                    onPress={() => onItemPressed(author)} />
        )
    }

    return (
        <CFlatList
            headerText={headerText}
            data={authorIds}
            horizontal={horizontal}
            renderItem={({ item }) => {
                const author = authorsContext.authors.get(item)
                return buildItem(author)
            }}
            keyExtractor={item => item}
            ItemSeparatorComponent={() => <CDivider marginHorizontal={Sizes.s4} />}
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
})
