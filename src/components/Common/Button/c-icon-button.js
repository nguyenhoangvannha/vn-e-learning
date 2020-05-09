import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import Colors from '../../../globals/colors'
import Sizes from '../../../globals/sizes'
import { Icon } from 'react-native-elements'

const CIconButton = ({ onPress, color, size, icon, style }) => {
    return (
        <Icon
            style={style}
            name={icon}
            color={color ?? Colors.black}
            size={size ?? Sizes.s16}
            onPress={onPress}
        />
    )
}

export default CIconButton

const styles = StyleSheet.create({})
