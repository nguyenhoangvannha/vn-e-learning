import React from 'react'
import { StyleSheet } from 'react-native'
import IconName from '../../globals/icon-name'
import Sizes from '../../globals/sizes'
import CText from '../Common/Text/c-text'
import FontWeight from '../../globals/font-weight'
import Expanded from '../Common/Container/expanded'
import SizedBox from '../Common/Container/sized-box'
import CIonIcon from '../Common/Icon/c-ion-icon'
import Alignment from '../../globals/alignment'
import AbstractAppbar from '../Common/AppBar/abstract-appbar'
import Routes from '../../routes/routes'
import * as RootNavigation from '../../routes/navigations/root-navigation'
import MenuButton from '../Common/Menu/menu-button'
import { MenuOption } from 'react-native-popup-menu'
import MenuItem from '../Common/Menu/menu-item'

const HomeAppBar = ({ title, hasBack = false }) => {
    const iconSize = Sizes.s24

    const onProfilePressed = () => {
        RootNavigation.navigate(Routes.Profile)
    }

    const onSettingsPressed = () => {
        RootNavigation.navigate(Routes.Settings)
    }


    return (
        <AbstractAppbar
            leading={hasBack && <CIonIcon name={IconName.iosArrowBack} style={styles.backIcon} size={iconSize} />}
            title={<CText data={title} style={styles.title} />}
            middle={<Expanded />}
            trailing={[
                <CIonIcon name={IconName.ioscontact} size={iconSize} onPress={onProfilePressed} />,
                <SizedBox width={Sizes.s16} />,
                <MenuButton
                    iconName={IconName.mdMore}
                    menuOptions={[
                        <MenuItem title='Settings' onPress={onSettingsPressed}/>,
                        <MenuItem title='Send Feedback' />,
                        <MenuItem title='Contact Support' />
                    ]}
                />
            ]}
        />
    )
}

export default HomeAppBar

const styles = StyleSheet.create({
    backIcon: {
        fontSize: Sizes.s24,
        alignSelf: Alignment.center,
        paddingRight: Sizes.s8
    },
    title: {
        fontSize: Sizes.s18,
        fontWeight: FontWeight.w500,
        alignSelf: Alignment.center,
    }
})
