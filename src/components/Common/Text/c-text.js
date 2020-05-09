import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CText = ({style, data}) => {
    return <Text style={{ ...styles.text, ...style }}>{data}</Text>
}

export default CText

const styles = StyleSheet.create({
    text: {
    }
})
