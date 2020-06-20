import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../../provider/theme-provider'

export default function ScreenContainer({ children, style }) {
    const themeContext = useContext(ThemeContext)
    const theme = themeContext.theme

    return (
        <View style={{ ...style, ...styles.container, backgroundColor: theme.background }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    }
})
