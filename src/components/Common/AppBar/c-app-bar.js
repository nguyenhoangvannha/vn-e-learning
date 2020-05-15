import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Sizes from '../../../globals/sizes'
import Alignment from '../../../globals/alignment'
import FlexDirection from '../../../globals/flex-direction'
import AbstractAppbar from './abstract-appbar'
import CIonIcon from '../Icon/c-ion-icon'
import IconName from '../../../globals/icon-name'
import { useNavigation } from '@react-navigation/native';
import CText from '../Text/c-text'
import FontWeight from '../../../globals/font-weight'

const CAppBar = ({ leading, onLeadingPressed, title, middle, trailing, hasLeading = true }) => {
    const navigation = useNavigation();

    const onBackPressed = () => {
        navigation.goBack()
    }
    return (
        <AbstractAppbar
            leading={hasLeading &&
                <CIonIcon
                    name={leading ?? IconName.iosArrowBack}
                    onPress={onLeadingPressed ?? onBackPressed} size={Sizes.s26}/>}
            title={title &&
                <CText data={title} style={styles.title}/>}
        />
    )
}

export default CAppBar

const styles = StyleSheet.create({
    title: {
        fontSize: Sizes.s22,
        fontWeight: FontWeight.w500,
        alignSelf: Alignment.center,
    }
})