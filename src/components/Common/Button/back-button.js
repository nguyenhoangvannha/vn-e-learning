import React from 'react'
import { StyleSheet } from 'react-native'
import IconName from '../../../res/icon-name'
import CIonIcon from '../Icon/c-ion-icon'
import Sizes from '../../../res/sizes'
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ iconName, iconSize, style, onPress, }) => {

    const navigation = useNavigation();

    const onBackPressed = () => {
        navigation.goBack()
    }

    return (
        <CIonIcon
            name={iconName ?? IconName.iosArrowBack}
            style={{ ...styles.backIcon, ...style }}
            size={iconSize ?? Sizes.s24}
            onPress={onPress ?? onBackPressed} />
    )
}

export default BackButton

const styles = StyleSheet.create({
    backIcon: {
        fontSize: Sizes.s24,
        paddingRight: Sizes.s16,
    },
})
