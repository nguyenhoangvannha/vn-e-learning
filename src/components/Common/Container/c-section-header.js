import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FlexDirection from '../../../globals/flex-direction'
import CText from '../Text/c-text'
import Expanded from './expanded'
import CIonIcon from '../Icon/c-ion-icon'
import Styles from '../../../globals/styles'
import CFlatButton from '../Button/c-flat-button'
import IconName from '../../../globals/icon-name'
import Alignment from '../../../globals/alignment'
import Colors from '../../../globals/colors'
import Sizes from '../../../globals/sizes'
import TextStyles from '../../../globals/text-styles'

const CSectionHeader = ({ leadingText, trailingText, iconName }) => {
    return (
        <View style={styles.container}>
            <CText data={leadingText} style={TextStyles.subhead}/>
            <Expanded />
            <CFlatButton
                title={trailingText}
                trailing={<CIonIcon name={iconName ?? IconName.iosArrowForward} size={Sizes.s16}/>}
            />
        </View>
    )
}

export default CSectionHeader

const styles = StyleSheet.create({
    container: {
        paddingVertical: Sizes.s12,
        flexDirection: FlexDirection.row,
        backgroundColor: Colors.white,
        alignItems: Alignment.center,
    }
})
