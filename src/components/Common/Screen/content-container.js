import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../../provider/theme-provider'

export default function ContentContainer({ children, style }) {
    const themeContext = useContext(ThemeContext)
    const theme = themeContext.theme
    return (
        <View style={{...style, backgroundColor: theme.background}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({})
