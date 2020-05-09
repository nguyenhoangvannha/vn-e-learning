import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import TextStyles from '../../../globals/text-styles'
import CText from '../Text/c-text'

const CFlatList = ({ style, horizontal, data, renderItem, keyExtractor, ItemSeparatorComponent, headerText, headerStyle }) => {
    return (
        <View>
            <View>
                {headerText != undefined && <CText data={headerText}/>}
            </View>
            <FlatList style={style}
                horizontal={horizontal}
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={ItemSeparatorComponent}
            />
        </View>
    )
}

export default CFlatList
