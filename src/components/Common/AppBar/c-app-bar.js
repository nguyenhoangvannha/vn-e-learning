import React from 'react'
import { StyleSheet } from 'react-native'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import AbstractAppbar from './abstract-appbar'
import CIonIcon from '../Icon/c-ion-icon'
import IconName from '../../../res/icon-name'
import { useNavigation } from '@react-navigation/native';
import CText from '../Text/c-text'
import Expanded from '../Container/expanded'

const CAppBar = ({ leading, onLeadingPressed, title, middle, trailing, hasLeading = true , dividerColor}) => {
    const navigation = useNavigation();

    const onBackPressed = () => {
        navigation.goBack()
    }

    return (
        <AbstractAppbar
            leading={hasLeading &&
                <CIonIcon
                    name={leading ?? IconName.iosArrowBack}
                    style={styles.leading}
                    onPress={onLeadingPressed ?? onBackPressed}
                    size={Sizes.s24} />}
            title={title &&
                <CText data={title} style={styles.title} />}
            middle={<Expanded/>}
            trailing={trailing}
            dividerColor={dividerColor}
        />
    )
}

export default CAppBar

const styles = StyleSheet.create({
    leading: {
        paddingRight: Sizes.s16,
    },
    title: {
        fontSize: Sizes.s18,
        alignSelf: Alignment.center,
    }
})