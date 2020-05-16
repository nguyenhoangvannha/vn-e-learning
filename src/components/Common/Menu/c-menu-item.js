import React from 'react'
import { StyleSheet } from 'react-native'
import { MenuOption } from 'react-native-popup-menu'
import CText from '../Text/c-text'
import Sizes from '../../../globals/sizes'
import CIonIcon from '../Icon/c-ion-icon'
import FlexDirection from '../../../globals/flex-direction'
import Alignment from '../../../globals/alignment'

const CMenuItem = ({onPress, title, iconName}) => {
    return (
        <MenuOption onSelect={onPress} style={styles.container}>
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
