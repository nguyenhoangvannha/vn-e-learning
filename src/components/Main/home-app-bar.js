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


const HomeAppBar = ({ title, hasBack = false }) => {
    const iconSize = Sizes.s24

    const onProfilePressed = () => {
        RootNavigation.navigate(Routes.Profile)
    }

    const onOptionsPressed = () => {
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
                <CIonIcon name={IconName.mdMore} size={iconSize} onPress={onOptionsPressed}/>
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
