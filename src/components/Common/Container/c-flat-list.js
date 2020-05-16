import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Sizes from '../../../globals/sizes'
import FlexDirection from '../../../globals/flex-direction'
import Alignment from '../../../globals/alignment'
import CSectionHeader from './c-section-header'

const CFlatList = ({
    style,
    containerStyle,
    horizontal,
    data,
    renderItem,
    keyExtractor,
    ItemSeparatorComponent,
    headerText,
    trailingText,
    trailingIcon,
    onTrailingPress,
    hasTrailing = true }) => {
    return (
        <View style={containerStyle}>
            <CSectionHeader
                leadingText={headerText}
                trailingText={trailingText}
                iconName={trailingIcon}
                onTrailingPress={onTrailingPress}
                hasTrailing={hasTrailing} />
            <FlatList style={style}
                horizontal={horizontal ?? false}
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={ItemSeparatorComponent}
                contentContainerStyle={styles.contentContainerStyle} />
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
    },
    contentContainerStyle: {
        paddingBottom: Sizes.s10,
    }
})

