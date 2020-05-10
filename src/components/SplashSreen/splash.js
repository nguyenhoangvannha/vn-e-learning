import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import Styles from '../../globals/styles'
import Colors from '../../globals/colors'
import Alignment from '../../globals/alignment'
import CText from '../Common/Text/c-text'
import TextStyles from '../../globals/text-styles'
import FontWeight from '../../globals/font-weight'
import Sizes from '../../globals/sizes'
import SizedBox from '../Common/Container/sized-box'
import { Icon } from 'react-native-elements'

const Splash = () => {
    return (
        <View style={Styles.fullScreen}>
            <View style={styles.container}>
                <CText data='VN E - Learning' style={styles.label}/>
                <SizedBox height={Sizes.s12}/>
                <Icon name='book' size={Sizes.s64} color={Colors.white}/>
                <SizedBox height={Sizes.s64}/>
                <ActivityIndicator/>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue500,
        justifyContent: Alignment.center,
        alignItems: Alignment.center,
        paddingHorizontal: Sizes.s24,
    },
    label: {
        ...TextStyles.display1,
        fontWeight: FontWeight.bold,
        color: Colors.white,
        textAlign: Alignment.center,
    }
})
