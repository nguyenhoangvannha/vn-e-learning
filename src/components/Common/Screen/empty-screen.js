import React from 'react'
import { StyleSheet, View } from 'react-native'
import CText from '../Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import Styles from '../../../res/styles/styles'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import SizedBox from '../Container/sized-box'
import CIonIcon from '../Icon/c-ion-icon'
import ScreenContainer from './screen-container'

const EmptyScreen = ({ style, uri, title, subtitle }) => {

    return (
        <ScreenContainer style={{ ...styles.container, ...style}}>
            <CIonIcon name={uri} style={styles.image} size={Sizes.s100} />
            <SizedBox height={Sizes.s4} />
            <CText data={title} style={TextStyles.title} />
            <SizedBox height={Sizes.s2} />
            <CText data={subtitle} style={styles.subtitle} />
        </ScreenContainer>
    )
}

export default EmptyScreen

const styles = StyleSheet.create({
    container: {
        ...Styles.screenContainer,
        justifyContent: Alignment.center,
        alignItems: Alignment.center,
        paddingHorizontal: 40,
    },
    title: {
        ...TextStyles.title,
        textAlign: Alignment.center,
    },
    subtitle: {
        ...TextStyles.subtitle,
        textAlign: Alignment.center,
    }
})
