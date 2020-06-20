import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Colors from '../../../res/colors'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import FontWeight from '../../../globals/font-weight'
import SizedBox from '../Container/sized-box'
import CTextInput from './c-text-input'
import { ThemeContext } from '../../../provider/theme-provider'
import ErrorText from '../error/error-text'

const CFromTextInput = ({
    error,
    style,
    width,
    label,
    onChangeText,
    numberOfLines,
    placeholder,
    secureTextEntry,
    children,
    showErrorText = true,
    validators }) => {
    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    var hasError = (error != undefined && error.length > 0);
    var borderColor = hasError ? Colors.red : Colors.grey100;

    return <View>
        <View style={{
            ...styles.container,
            ...style,
            width: width,
            borderColor: borderColor
        }}>
            {
                (label != undefined && label.length > 0) &&
                <Text style={styles.label} >{label}</Text>
            }
            <SizedBox height={3} />
            <CTextInput
                style={{
                    ...styles.textInput,
                    ...style,
                    color: theme.textColor
                }}
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
            hasError && showErrorText && <ErrorText>{error}</ErrorText>
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
    },
})
