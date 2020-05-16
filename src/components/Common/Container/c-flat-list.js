import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import TextStyles from '../../../globals/text-styles'
import CText from '../Text/c-text'
import Sizes from '../../../globals/sizes'
import FlexDirection from '../../../globals/flex-direction'
import Alignment from '../../../globals/alignment'
import SizedBox from './sized-box'

const CFlatList = ({
    style,
    containerStyle,
    horizontal,
    data,
    renderItem,
    keyExtractor,
    ItemSeparatorComponent,
    headerText,
    headerStyle,
    trailing }) => {
    return (
        <View style={containerStyle}>
            <View style={styles.header}>
                {headerText != undefined && <CText data={headerText} style={headerStyle ?? TextStyles.subhead} />}
                {trailing}
            </View>
            {(headerText != undefined || trailing != undefined) && <SizedBox height={Sizes.s8} />}
            <FlatList style={style}
                horizontal={horizontal ?? false}
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={ItemSeparatorComponent}
                contentContainerStyle={styles.contentContainerStyle}
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
    },
    contentContainerStyle: {
        paddingBottom: Sizes.s10,
    }
})

