import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconName from '../../../res/icon-name'
import Colors from '../../../res/colors'
import Sizes from '../../../res/sizes'
import FlexDirection from '../../../globals/flex-direction'
import CIonIcon from '../Icon/c-ion-icon'
import SizedBox from '../Container/sized-box'

export default function ErrorText({ text, children }) {
    return (
        text ?
            <View style={styles.errorRow}>
                <CIonIcon name={IconName.mdAlert} color={Colors.red} size={Sizes.s14} />
                <SizedBox width={Sizes.s8} />
                <Text style={styles.errorText}>{text ?? children}</Text>
            </View> : <View />
    )
}

const styles = StyleSheet.create({
    errorRow: {
        flexDirection: FlexDirection.row
    },
    errorText: {
        fontSize: Sizes.s12,
        lineHeight: Sizes.s14,
        color: Colors.errorAlert,
        letterSpacing: 0.5,
    },
})
