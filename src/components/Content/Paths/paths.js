import React from 'react'
import { StyleSheet, View } from 'react-native'
import PathItem from './path-item'
import PathItenVer from './path-item-ver'
import CFlatList from '../../Common/Container/c-flat-list'
import pathsData from '../../../data/mock/paths-mock-data'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../globals/sizes'
import CDivider from '../../Common/Container/c-divider'

const Paths = ({ style, headerText, horizontal = true, hasTrailing = true, onTrailingPress }) => {
    const buildItem = (path) => {
        return horizontal ? <PathItem
            style={styles.item}
            image={path.image}
            name={path.name}
            coursesCount={path.coursesCount} /> : <PathItenVer
                style={styles.item}
                image={path.image}
                name={path.name}
                coursesCount={path.coursesCount}
            />
    }
    return (
        <View style={style}>
            <CFlatList
                headerText={headerText}
                horizontal={horizontal}
                data={pathsData}
                renderItem={({ item }) => buildItem(item)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => horizontal ? <SizedBox width={Sizes.s16} /> : <CDivider containerHeight={Sizes.s12} />}
                trailingText='See All'
                hasTrailing={hasTrailing}
                onTrailingPress={onTrailingPress}
            />
        </View>
    )
}

export default Paths

const styles = StyleSheet.create({
    item: {
        width: Sizes.s200,
        height: Sizes.s150,
    }
})
