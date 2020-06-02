import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FlexDirection from '../../../globals/flex-direction'
import SizedBox from './sized-box'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'

const CardTile = ({ style, title, subtitle, leading, trailing, bodyItemsSpace, leadingMarginBottom }) => {
    return (
        <View style={style}>
            <View style={styles.container}>
                {leading != undefined && leading}
                {leading != undefined && <SizedBox height={leadingMarginBottom ?? Sizes.s16} />}
                {title != undefined && title}
                {title != undefined && subtitle != undefined && <SizedBox height={bodyItemsSpace ?? Sizes.s2} />}
                {subtitle != undefined && subtitle}
                {trailing != undefined && trailing}
            </View>
        </View>
    )
}

export default CardTile

const styles = StyleSheet.create({
    container: {
        flexDirection: FlexDirection.column,
        alignItems: Alignment.center,
        justifyContent: Alignment.center,
    },
})
