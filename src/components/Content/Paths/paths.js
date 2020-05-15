import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PathItem from './path-item'
import CFlatList from '../../Common/Container/c-flat-list'
import pathsData from '../../../data/mock/paths-mock-data'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../globals/sizes'

const Paths = ({ style, headerText}) => {
    const buildItem = (path) => {
        return <PathItem
            style={styles.item}
            image={path.image}
            name={path.name}
            coursesCount={path.coursesCount} />
    }
    return (
        <View style={style}>
            <CFlatList
                headerText={headerText}
                horizontal={true}
                data={pathsData}
                renderItem={({ item }) => buildItem(item)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <SizedBox width={Sizes.s16} />} />
        </View>
    )
}

export default Paths

const styles = StyleSheet.create({
    item: {
        width: 200,
        height: 150,
        marginBottom: 9
    }
})
