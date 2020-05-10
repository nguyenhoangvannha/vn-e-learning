import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import TextStyles from '../../../globals/text-styles'
import CText from '../Text/c-text'
import Styles from '../../../globals/styles'
import Sizes from '../../../globals/sizes'
import FlexDirection from '../../../globals/flex-direction'
import Alignment from '../../../globals/alignment'

const CFlatList = ({ style,
    horizontal,
    data,
    renderItem,
    keyExtractor,
    ItemSeparatorComponent,
    headerText,
    headerStyle,
    trailing }) => {
    return (
        <View>
            <View style={styles.header}>
                {headerText != undefined && <CText data={headerText} style={headerStyle ?? TextStyles.title} />}
                {trailing}
            </View>
            <FlatList style={style}
                horizontal={horizontal ?? false}
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={ItemSeparatorComponent}
            />
        </View>
    )
}

export default CFlatList

const styles = StyleSheet.create({
    header: {
        flexDirection: FlexDirection.row,
        justifyContent: Alignment.spaceBetween,
        alignItems: Alignment.center,
        marginHorizontal: Sizes.s8,
        marginVertical: Sizes.s8,
    }
})

