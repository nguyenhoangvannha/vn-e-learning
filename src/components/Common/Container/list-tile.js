import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FlexDirection from '../../../res/styles/flex-direction'
import SizedBox from './sized-box'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import Expanded from './expanded'

const ListTile = ({ style, title, subtitle, leading, trailing, bodyItemsSpace, leadingMarginRight }) => {
    return (
        <View style={style}>
            <View style={styles.container}>
                {leading != undefined && leading}
                {leading != undefined && <SizedBox width={leadingMarginRight ?? Sizes.s16} />}
                <View style={styles.body}>
                    {title != undefined && title}
                    {title != undefined && subtitle != undefined && <SizedBox height={bodyItemsSpace ?? Sizes.s2} />}
                    {subtitle != undefined && subtitle}
                </View>
                <Expanded>
                </Expanded>
                {trailing != undefined && trailing}
            </View>
        </View>
    )
}

export default ListTile

const styles = StyleSheet.create({
    container: {
        flexDirection: FlexDirection.row,
        alignItems: Alignment.center,
    },
    body: {
        justifyContent: Alignment.center,
    }
})
