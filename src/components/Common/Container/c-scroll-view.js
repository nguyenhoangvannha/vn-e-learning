import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

const CScrollView = ({
    children,
    style,
    contentContainerStyle,
    indicatorStyle,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator }) => {
    return (
        <ScrollView
            style={style}
            indicatorStyle={indicatorStyle}
            contentContainerStyle={contentContainerStyle}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            indicatorStyle={indicatorStyle}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}>
            {children}
        </ScrollView>
    )
}

export default CScrollView

const styles = StyleSheet.create({})
