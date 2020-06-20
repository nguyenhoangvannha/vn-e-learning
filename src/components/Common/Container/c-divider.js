import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-elements'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import { ThemeContext } from '../../../provider/theme-provider'

const CDivider = ({ marginHorizontal, style, height, marginVertical, containerHeight, color, elevation }) => {
    const themeContext = useContext(ThemeContext)
    const theme = themeContext.theme

    return (
        <View style={{
            height: containerHeight,
            justifyContent: Alignment.center,
            ...style,
            elevation: elevation,
        }}>
            <Divider style={{
                backgroundColor: color ?? theme.divider,
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
