import React from 'react'
import { StyleSheet, View } from 'react-native'
import CAvatar from '../../Common/Image/c-avatar'
import Styles from '../../../globals/styles'
import AuthorItemInfo from './author-item-info'
import Sizes from '../../../globals/sizes'
import Alignment from '../../../globals/alignment'

const ListAuthorsItem = ({style, author}) => {
    return (
        <View style={{...Styles.row, ...style}}>
            <CAvatar size={Sizes.s48} uri={author.avatar ?? ''}/>
            <AuthorItemInfo style={styles.authorInfo} author={author}/>
        </View>
    )
}

export default ListAuthorsItem

const styles = StyleSheet.create({
    authorInfo: {
        paddingHorizontal: Sizes.s16,
        justifyContent: Alignment.center
    }
})
