import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import Sizes from '../../../res/sizes'
import SizedBox from '../Container/sized-box'
import AbstractAppbar from './abstract-appbar'
import CIonIcon from '../Icon/c-ion-icon'
import IconName from '../../../res/icon-name'
import Colors from '../../../res/colors'
import FontWeight from '../../../globals/font-weight'
import CText from '../Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import Expanded from '../Container/expanded'
import Alignment from '../../../res/styles/alignment'
import {useNavigation} from '@react-navigation/native'

const ImageAppBar = ({ uri, height, title }) => {

    height = height ?? Sizes.s120

    const navigation = useNavigation()

    const onLeadingPressed= () => {
        navigation.goBack()
    }

    return (
        <ImageBackground
            source={{ uri: uri }}
            width={'100%'}
            style={{ width: '100%' }} >
            <SizedBox height={height} style={styles.container}>
                <AbstractAppbar
                    hasBackgroundColor={false}
                    leading={<CIonIcon name={IconName.iosArrowBack} color={Colors.white} style={styles.leading} onPress={onLeadingPressed}/>}
                    middle={<Expanded><CText style={{ ...TextStyles.headline, ...styles.title }}>{title}</CText></Expanded>} />
            </SizedBox>
        </ImageBackground>
    )
}

export default ImageAppBar

const styles = StyleSheet.create({
    // container: {
    //     justifyContent: Alignment.center,
    // },
    // leading: {
    //     alignSelf: Alignment.flexStart,
    // },
    title: {
        textAlignVertical: Alignment.center,
        textAlign: Alignment.center,
        color: Colors.white,
        alignSelf: Alignment.center,
    }
})
