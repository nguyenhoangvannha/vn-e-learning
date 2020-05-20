import React from 'react'
import { StyleSheet } from 'react-native'
import IconName from '../../../res/icon-name'
import Sizes from '../../../res/sizes'
import CText from '../Text/c-text'
import FontWeight from '../../../globals/font-weight'
import Expanded from '../Container/expanded'
import SizedBox from '../Container/sized-box'
import CIonIcon from '../Icon/c-ion-icon'
import Alignment from '../../../res/styles/alignment'
import AbstractAppbar from './abstract-appbar'
import Routes from '../../../routes/routes'
import MenuButton from '../Menu/menu-button'
import CMenuItem from '../Menu/c-menu-item'
import { RootNavigation } from '../../../routes/navigations/root-navigation'

const HomeAppBar = ({ title, hasBack = false }) => {
    const iconSize = Sizes.s24

    const onProfilePressed = () => {
        RootNavigation.navigate(Routes.Profile)
    }

    const onSettingsPressed = () => {
        RootNavigation.navigate(Routes.Settings)
    }

    const onFeedbackPressed= () => {
        RootNavigation.navigate(Routes.SendFeedbackScreen)
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
                        <CMenuItem title='Settings' iconName={IconName.settings} onPress={onSettingsPressed}/>,
                        <CMenuItem title='Send Feedback' iconName={IconName.iosPaperPlane} onPress={onFeedbackPressed}/>,
                        <CMenuItem title='Contact Support' iconName={IconName.mdCall} />
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
