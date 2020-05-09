import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

const CScrollView = ({children, style}) => {
    return (
        <ScrollView style={style}>
            {children}
        </ScrollView>
    )
}

export default CScrollView

const styles = StyleSheet.create({})
