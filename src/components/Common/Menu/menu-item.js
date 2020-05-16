import React from 'react'
import { StyleSheet } from 'react-native'
import { MenuOption } from 'react-native-popup-menu'
import CText from '../Text/c-text'
import Sizes from '../../../globals/sizes'

const MenuItem = ({onPress, title}) => {
    return (
        <MenuOption onSelect={onPress}>
            <CText style={styles.text} data={title}/>
        </MenuOption>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: Sizes.s16,
        paddingVertical: Sizes.s8,
    }
})
