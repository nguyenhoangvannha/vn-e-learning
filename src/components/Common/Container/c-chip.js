import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Chip } from 'react-native-paper'
import CText from '../Text/c-text'
import Alignment from '../../../res/styles/alignment'
import TextStyles from '../../../res/styles/text-styles'
import COpacityButton from '../Button/c-opacity-button'

const CChip = ({ title, onPress }) => {
    return (
        <COpacityButton onPress={onPress}>
            <Chip style={styles.chip}><CText data={title} style={TextStyles.caption} /></Chip>
        </COpacityButton>
    )
}

export default CChip

const styles = StyleSheet.create({
    chip: {
        alignSelf: Alignment.baseLine
    }
})
