import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CText from '../Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import COpacityButton from '../Button/c-opacity-button'
import { ThemeContext } from '../../../provider/theme-provider'
import SizedBox from './sized-box'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import FlexDirection from '../../../res/styles/flex-direction'
import Colors from '../../../res/colors'

const CChip = ({ leading, title, onPress, style, leadingText }) => {

    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    return (
        <COpacityButton onPress={onPress}>
            <View
                style={{ ...styles.chip, ...style, backgroundColor: theme.chipColor }}>
                {leading}
                {
                    leadingText != undefined && <Text
                        style={{ color: Colors.green }}>
                        {leadingText}</Text>
                }
                {leading != undefined || leadingText != undefined && <SizedBox width={Sizes.s8} />}
                <CText data={title} style={{ ...TextStyles.caption, ...styles.text }} />
            </View>
        </COpacityButton>
    )
}

export default CChip

const styles = StyleSheet.create({
    chip: {
        alignItems: Alignment.center,
        flexDirection: FlexDirection.row,
        paddingVertical: Sizes.s4,
        paddingLeft: Sizes.s4,
        paddingRight: Sizes.s8,
        borderRadius: Sizes.s16,
        alignSelf: 'baseline'
    },
    text: {
    }
})
