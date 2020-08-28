import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import Sizes from '../../../res/sizes';
import FontWeight from '../../../res/styles/font-weight';
import Alignment from '../../../res/styles/alignment';
import Colors from '../../../res/colors';

const CTextInput = ({ style, onChangeText, numberOfLines, placeholder, secureTextEntry, children,
    initValue }) => {
    const input = React.createRef();
    const [value, setValue] = useState(initValue ?? '')
    return (
        <TextInput
            value={value}
            ref={input}
            style={{ ...styles.textInput, ...style }}
            onChangeText={(value) => {
                setValue(value)
                if (onChangeText != undefined) {
                    onChangeText(value)
                }
            }}
            numberOfLines={numberOfLines ?? 1}
            placeholder={placeholder}
            placeholderTextColor={Colors.desText}
            autoCapitalize={false}
            secureTextEntry={secureTextEntry ?? false}>
            {children}
        </TextInput>
    )
}

export default CTextInput

const styles = StyleSheet.create({
    textInput: {
        fontSize: Sizes.s16,
        fontWeight: FontWeight.w500,
        lineHeight: 19,
        alignItems: Alignment.center,
        color: Colors.heavyCaption,
    },
})
