import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Colors from '../../../res/colors'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import FontWeight from '../../../globals/font-weight'
import SizedBox from '../Container/sized-box'
import FlexDirection from '../../../globals/flex-direction'
import CTextInput from './c-text-input'
import IconName from '../../../res/icon-name'
import CIonIcon from '../Icon/c-ion-icon'

const CFromTextInput = ({ error, style, width, label, onChangeText, numberOfLines, placeholder, secureTextEntry, children, }) => {

    var hasError = (error != undefined && error.length > 0);
    var borderColor = hasError ? Colors.red : Colors.grey100;

    return <View>
        <View style={{ ...styles.container, ...style, width: width, borderColor: borderColor }}>
            {
                (label != undefined && label.length > 0) &&
                <Text style={styles.label} >{label}</Text>
            }
            <SizedBox height={3} />
            <CTextInput
                style={{ ...styles.textInput, ...style }}
                onChangeText={onChangeText}
                numberOfLines={numberOfLines ?? 1}
                placeholder={placeholder}
                placeholderTextColor={Colors.desText}
                secureTextEntry={secureTextEntry ?? false} >
                {children}
            </CTextInput>
        </View>
        <SizedBox height={Sizes.s8} />
        {
            hasError && <View style={styles.errorRow}>
                <CIonIcon name={IconName.mdAlert} color={Colors.red} size={Sizes.s14} />
                <SizedBox width={Sizes.s8} />
                <Text style={styles.errorText}>{error}</Text>
            </View>
        }
    </View>
}

export default CFromTextInput

const styles = StyleSheet.create({
    container: {
        alignSelf: Alignment.stretch,
        height: Sizes.s56,
        borderColor: Colors.grey100,
        borderWidth: Sizes.s2,
        borderRadius: Sizes.s8,
        paddingHorizontal: Sizes.s20,
        paddingVertical: Sizes.s10,
        justifyContent: Alignment.center,
    },
    label: {
        fontSize: Sizes.s12,
        lineHeight: Sizes.s14,
        alignItems: Alignment.center,
        color: Colors.desText,
    },
    textInput: {
        fontSize: Sizes.s16,
        fontWeight: FontWeight.w500,
        lineHeight: 19,
        alignItems: Alignment.center,
        color: Colors.heavyCaption,
    },
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
