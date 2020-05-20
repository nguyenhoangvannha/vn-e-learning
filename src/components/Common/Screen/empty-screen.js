import React from 'react'
import { StyleSheet, View } from 'react-native'
import CText from '../Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import Styles from '../../../res/styles/styles'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import SizedBox from '../Container/sized-box'
import CIonIcon from '../Icon/c-ion-icon'

const EmptyScreen = ({ style, uri, title, subtitle }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            <CIonIcon name={uri} style={styles.image} size={Sizes.s100}/>
            <SizedBox height={Sizes.s4}/>
            <CText data={title} style={TextStyles.title} />
            <SizedBox height={Sizes.s2}/>
            <CText data={subtitle} style={styles.subtitle} />
        </View>
    )
}

export default EmptyScreen

const styles = StyleSheet.create({
    container: {
        ...Styles.screenContainer,
        justifyContent: Alignment.center,
        alignItems: Alignment.center,
        paddingHorizontal:40,
    },
    subtitle: {
        ...TextStyles.subtitle,
        textAlign: Alignment.center,
    }
})
