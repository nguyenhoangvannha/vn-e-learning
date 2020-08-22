import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { MenuOption } from 'react-native-popup-menu'
import CText from '../Text/c-text'
import Sizes from '../../../res/sizes'
import CIonIcon from '../Icon/c-ion-icon'
import FlexDirection from '../../../res/styles/flex-direction'
import Alignment from '../../../res/styles/alignment'
import { ThemeContext } from '../../../provider/theme-provider'

const CMenuItem = ({onPress, title, iconName}) => {
    const themeContext = useContext(ThemeContext)
    const theme = themeContext.theme

    return (
        <MenuOption onSelect={onPress} style={{...styles.container, backgroundColor: theme.popupColor}}>
            <CIonIcon name={iconName}/>
            <CText style={styles.text} data={title}/>
        </MenuOption>
    )
}

export default CMenuItem

const styles = StyleSheet.create({
    container: {
        flexDirection: FlexDirection.row,
        alignItems: Alignment.center
    },
    text: {
        paddingLeft: Sizes.s8,
        paddingRight: Sizes.s16,
        paddingVertical: Sizes.s8,
    }
})
