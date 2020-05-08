import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CText = (props) => {
    return <Text style={{ ...styles.text, ...props.style }}>{props.data}</Text>
}

export default CText

const styles = StyleSheet.create({
    text: {
    }
})
