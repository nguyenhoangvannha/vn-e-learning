import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const COpacityButton = ({children, style, onPress}) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

export default COpacityButton

const styles = StyleSheet.create({})
