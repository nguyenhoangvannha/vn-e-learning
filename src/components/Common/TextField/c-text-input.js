import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import Colors from '../../../globals/colors'
import Sizes from '../../../globals/sizes'
import Alignment from '../../../globals/alignment'
import FontWeight from '../../../globals/font-weight'
import { Divider, Icon } from 'react-native-elements'
import SizedBox from '../Container/sized-box'
import FlexDirection from '../../../globals/flex-direction'

const CTextInput = ({error, style, width, label, onChangeText, numberOfLines,placeholder, secureTextEntry }) => {

    const input = React.createRef();

    var hasError = (error != undefined && error.length > 0);
    var borderColor = hasError ? Colors.red : Colors.grey100;

    return <View>
        <View style={{ ...styles.container, ...style, width: width, borderColor: borderColor }}>
            {
                (label != undefined && label.length > 0) &&
                <Text style={styles.label} >{label}</Text>
            }
            <SizedBox height={3} />
            <TextInput
                ref={input}
                style={{ ...styles.textInput, ...style }}
                onChangeText={onChangeText}
                numberOfLines={numberOfLines ?? 1}
                placeholder={placeholder}
                placeholderTextColor={Colors.desText}
                secureTextEntry={secureTextEntry ?? false}
            />
        </View>
        <SizedBox height={Sizes.s8} />
        {
            hasError && <View style={styles.errorRow}>
                <Icon name='error' color={Colors.red} size={Sizes.s14} />
                <SizedBox width={Sizes.s8} />
                <Text style={styles.errorText}>{error}</Text>
            </View>
        }
    </View>
}

export default CTextInput

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
