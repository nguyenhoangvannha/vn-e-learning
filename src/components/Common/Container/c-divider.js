import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import Sizes from '../../../globals/sizes'

const CDivider = ({ marginHorizontal, style, height, marginVertical }) => {
    return (
        <Divider style={{
            height: height ?? 1,
            ...styles.divider,
            marginHorizontal: marginHorizontal ?? styles.divider.marginHorizontal,
            marginVertical: marginVertical ?? 0,
            ...style
        }} />
    )
}

export default CDivider

const styles = StyleSheet.create({
    divider: {
        marginHorizontal: Sizes.s16,
    }
})
