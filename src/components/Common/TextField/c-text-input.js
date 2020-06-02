import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import Sizes from '../../../res/sizes';
import FontWeight from '../../../globals/font-weight';
import Alignment from '../../../res/styles/alignment';
import Colors from '../../../res/colors';

const CTextInput = ({style, onChangeText, numberOfLines, placeholder, secureTextEntry}) => {
    const input = React.createRef();
    return (
        <TextInput
            ref={input}
            style={{ ...styles.textInput, ...style }}
            onChangeText={onChangeText}
            numberOfLines={numberOfLines ?? 1}
            placeholder={placeholder}
            placeholderTextColor={Colors.desText}
            secureTextEntry={secureTextEntry ?? false}/>
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
