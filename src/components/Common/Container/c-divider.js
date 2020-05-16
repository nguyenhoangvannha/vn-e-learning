import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import Sizes from '../../../globals/sizes'
import Alignment from '../../../globals/alignment'
import Colors from '../../../globals/colors'

const CDivider = ({ marginHorizontal, style, height, marginVertical, containerHeight, color, elevation }) => {
    return (
        <View style={{ height: containerHeight, justifyContent: Alignment.center, ...style, elevation: elevation }}>
            <Divider style={{
                backgroundColor: color ?? Colors.grey100,
                height: height ?? 1,
                ...styles.divider,
                marginHorizontal: marginHorizontal ?? styles.divider.marginHorizontal,
                marginVertical: marginVertical ?? 0,
            }} />
        </View>
    )
}

export default CDivider

const styles = StyleSheet.create({
    divider: {
        marginHorizontal: Sizes.s16,
    }
})
