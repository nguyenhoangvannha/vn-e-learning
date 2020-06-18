import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Chip } from 'react-native-paper'
import CText from '../Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import COpacityButton from '../Button/c-opacity-button'
import { ThemeContext } from '../../../provider/theme-provider'
import SizedBox from './sized-box'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'

const CChip = ({ leading, title, onPress, style }) => {

    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    return (
        <COpacityButton onPress={onPress}>
            <Chip
                style={{ ...styles.chip, ...style, backgroundColor: theme.chipColor }}>
                {leading}
                {leading != undefined && <SizedBox width={Sizes.s8} />}
                <CText data={title} style={{ ...TextStyles.caption, ...styles.text }} />
            </Chip>
        </COpacityButton>
    )
}

export default CChip

const styles = StyleSheet.create({
    chip: {

    },
    text: {
        textAlignVertical: Alignment.center,
    }
})
