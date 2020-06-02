import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

const CScrollView = ({
    children,
    style,
    contentContainerStyle,
    indicatorStyle,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
    stickyHeaderIndices,
    horizontal = false, }) => {
    return (
        <ScrollView
            horizontal={horizontal}
            style={style}
            indicatorStyle={indicatorStyle}
            contentContainerStyle={contentContainerStyle}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            indicatorStyle={indicatorStyle}
            stickyHeaderIndices={stickyHeaderIndices}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}>
            {children}
        </ScrollView>
    )
}

export default CScrollView

const styles = StyleSheet.create({})
