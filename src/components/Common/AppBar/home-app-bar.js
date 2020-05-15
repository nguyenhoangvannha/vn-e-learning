import React from 'react'
import { StyleSheet } from 'react-native'
import IconName from '../../../globals/icon-name'
import Sizes from '../../../globals/sizes'
import CText from '../Text/c-text'
import FontWeight from '../../../globals/font-weight'
import { useNavigation } from '@react-navigation/native';
import Expanded from '../Container/expanded'
import SizedBox from '../Container/sized-box'
import CIonIcon from '../Icon/c-ion-icon'
import Alignment from '../../../globals/alignment'
import AbstractAppbar from './abstract-appbar'


const HomeAppBar = ({ title, hasBack = false }) => {

    const navigation = useNavigation();

    const onBackPressed = () => {
        navigation.goBack()
    }

    const iconSize = Sizes.s24

    return (
        <AbstractAppbar
            leading={hasBack && <CIonIcon name={IconName.iosArrowBack} style={styles.backIcon} onPress={onBackPressed} size={iconSize}/>}
            title={<CText data={title} style={styles.title} />}
            middle={<Expanded />}
            trailing={[<CIonIcon name={IconName.ioscontact} size={iconSize}/>,
            <SizedBox width={Sizes.s16} />,
            <CIonIcon name={IconName.mdMore} size={iconSize}/>]}
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
