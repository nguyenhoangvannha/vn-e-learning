import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import ListAuthorsItem from '../ListAuthorsItem/list-author-item'
import Styles from '../../../globals/styles'
import authorsData from '../../../data/mock/authos-mock-data'
import CFlatList from '../../Common/Container/c-flat-list'
import CDivider from '../../Common/Container/c-divider'
import Sizes from '../../../globals/sizes'

const ListAuthors = () => {
    return (
        <View style={Styles.fullScreen}>
            <CFlatList
                data={authorsData}
                renderItem={({ item }) => <ListAuthorsItem author={item} style={styles.authorItem}/>}
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
    }
})
