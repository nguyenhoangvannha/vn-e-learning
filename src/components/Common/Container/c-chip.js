import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import CText from '../Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import COpacityButton from '../Button/c-opacity-button'
import { ThemeContext } from '../../../provider/theme-provider'
import SizedBox from './sized-box'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import FlexDirection from '../../../globals/flex-direction'

const CChip = ({ leading, title, onPress, style }) => {

    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    return (
        <COpacityButton onPress={onPress}>
            <View
                style={{ ...styles.chip, ...style, backgroundColor: theme.chipColor }}>
                {leading}
                {leading != undefined && <SizedBox width={Sizes.s8} />}
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
        alignSelf:'baseline'
    },
    text: {
    }
})
