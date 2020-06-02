import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const CTouchableButton = ({style, children, onPress}) => {
    return (
        <TouchableHighlight style={style} onPress={onPress}>
            {children}
        </TouchableHighlight>
    )
}

export default CTouchableButton

const styles = StyleSheet.create({})
