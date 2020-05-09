import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import Sizes from '../../../globals/sizes'

const CDivider = ({ marginHorizontal, style }) => {
    return (
        <Divider style={{
            ...styles.divider,
            marginHorizontal: marginHorizontal ?? styles.divider.marginHorizontal,
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
