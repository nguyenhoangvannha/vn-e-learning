import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Sizes from '../../../res/sizes'
import FlexDirection from '../../../globals/flex-direction'
import Alignment from '../../../res/styles/alignment'
import CSectionHeader from './c-section-header'
import ContentContainer from '../Screen/content-container'

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
    hasTrailing = true,
    contentContainerStyle,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
    numColumns,
    scrollEnabled, }) => {
    return (
        <ContentContainer style={containerStyle}>
            {(hasTrailing || headerText != undefined) &&
                <CSectionHeader
                    leadingText={headerText}
                    trailingText={trailingText}
                    iconName={trailingIcon}
                    onTrailingPress={onTrailingPress}
                    hasTrailing={hasTrailing} />
            }
            <FlatList
                style={style}
                horizontal={horizontal ?? false}
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={ItemSeparatorComponent}
                contentContainerStyle={contentContainerStyle ?? styles.contentContainerStyle}
                showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
                showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                numColumns={numColumns}
                scrollEnabled={scrollEnabled} />
        </ContentContainer>
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

