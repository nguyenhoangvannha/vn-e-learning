import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

const CIcon = ({name, style, iconStyle, onPress, size}) => {
    return (
        <Icon name={name} style={style} iconStyle={iconStyle} onPress={onPress} size={size}/>
    )
}

export default CIcon

const styles = StyleSheet.create({})
