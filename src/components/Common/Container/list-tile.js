import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CText from '../Text/c-text'
import TextStyles from '../../../globals/text-styles'
import FlexDirection from '../../../globals/flex-direction'
import Styles from '../../../globals/styles'
import SizedBox from './sized-box'
import Sizes from '../../../globals/sizes'
import Alignment from '../../../globals/alignment'

const ListTile = ({ style, title, subtitle, leading, trailing, bodyItemsSpace, leadingMarginRight }) => {
    return (
        <View style={style}>
            <View style={Styles.row}>
                {leading != undefined && leading}
                {leading != undefined && <SizedBox width={leadingMarginRight ?? Sizes.s16} />}
                <View style={styles.body}>
                    {title != undefined && title}
                    {title != undefined && subtitle != undefined && <SizedBox height={bodyItemsSpace ?? Sizes.s2} />}
                    {subtitle != undefined && subtitle}
                </View>
                {trailing != undefined && trailing}
            </View>
        </View>
    )
}

export default ListTile

const styles = StyleSheet.create({
    body: {
        justifyContent: Alignment.center,
    }
})
