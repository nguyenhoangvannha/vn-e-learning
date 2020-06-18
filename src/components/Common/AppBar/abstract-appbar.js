import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import FlexDirection from '../../../globals/flex-direction'
import Constants from "expo-constants";
import CSwitch from '../switch/c-switch'
import { ThemeContext, themes } from '../../../provider/theme-provider'

const AbstractAppbar = ({ leading, title, middle, trailing, dividerColor, backgroundColor, hasBackgroundColor = true }) => {
    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme;

    const isDarkTheme = theme === themes.dark

    return (
        <View style={styles.container}>
            <View style={{ height: Constants.statusBarHeight , backgroundColor: theme.statusBarColor}} />
            <View style={{ ...styles.appBar, backgroundColor: hasBackgroundColor ? (backgroundColor ?? theme.appBarColor) : undefined }}>
                {leading}
                {title}
                {middle}
                {trailing}
                <CSwitch initValue={isDarkTheme} onValueChange={(dark) => {
                    themeContext.setTheme(dark ? themes.dark : themes.light)
                }}>
                </CSwitch>
            </View>
            <View style={{ width: '100%', height: 0.25, backgroundColor: dividerColor ?? theme.background }} />
        </View>
    )
}

export default AbstractAppbar

const styles = StyleSheet.create({
    container: {
    },
    appBar: {
        height: Sizes.s50,
        alignItems: Alignment.center,
        justifyContent: Alignment.flexStart,
        alignContent: Alignment.center,
        flexDirection: FlexDirection.row,
        paddingHorizontal: Sizes.s16,
        //paddingTop: Constants.statusBarHeight,
    },
})
