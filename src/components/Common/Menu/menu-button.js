import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import CIonIcon from '../Icon/c-ion-icon';
import IconName from '../../../res/icon-name';
import Sizes from '../../../res/sizes';

const MenuButton = ({ iconName, menuOptions }) => {

    return (
        <Menu>
            <MenuTrigger >
                <CIonIcon name={iconName ?? IconName.mdMore}
                    paddingHorizonta={Sizes.s0} />
            </MenuTrigger>
            <MenuOptions>
                {menuOptions}
            </MenuOptions>
        </Menu>
    )
}

export default MenuButton

const styles = StyleSheet.create({})
