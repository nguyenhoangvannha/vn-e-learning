import React from 'react'
import { StyleSheet, View } from 'react-native'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import FlexDirection from '../../../globals/flex-direction'
import Constants from "expo-constants";
import Colors from '../../../res/colors'

const AbstractAppbar = ({ leading, title, middle, trailing, dividerColor, backgroundColor, hasBackgroundColor = true }) => {
    return (
        <View >
            <View style={{ ...styles.container, backgroundColor: hasBackgroundColor ? (backgroundColor ?? styles.container.backgroundColor) : undefined }}>
                {leading}
                {title}
                {middle}
                {trailing}
            </View>
            <View style={{ width: '100%', height: 0.25, backgroundColor: dividerColor }} />
        </View>
    )
}

export default AbstractAppbar

const styles = StyleSheet.create({
    container: {
        height: Sizes.s68,
        alignItems: Alignment.center,
        justifyContent: Alignment.flexStart,
        alignContent: Alignment.center,
        flexDirection: FlexDirection.row,
        paddingHorizontal: Sizes.s16,
        backgroundColor: Colors.white,
        paddingTop: Constants.statusBarHeight,
    },
})
