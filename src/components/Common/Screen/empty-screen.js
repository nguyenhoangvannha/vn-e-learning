import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CText from '../Text/c-text'
import TextStyles from '../../../globals/text-styles'
import CImage from '../Image/c-image'
import Styles from '../../../globals/styles'
import Sizes from '../../../globals/sizes'
import Alignment from '../../../globals/alignment'
import { Icon } from 'react-native-elements'
import Colors from '../../../globals/colors'
import SizedBox from '../Container/sized-box'

const EmptyScreen = ({ style, uri, title, subtitle }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            <Icon name={uri} style={styles.image} size={Sizes.s100}/>
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
        ...Styles.fullScreen,
        backgroundColor: Colors.grey100,
        justifyContent: Alignment.center,
        alignItems: Alignment.center,
        paddingHorizontal:40,
    },
    subtitle: {
        ...TextStyles.subtitle,
        textAlign: Alignment.center,
    }
})
