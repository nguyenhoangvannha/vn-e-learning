import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../../res/colors'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import CText from '../Text/c-text'
import SizedBox from '../Container/sized-box'
import CIonIcon from '../Icon/c-ion-icon'

const CIconButton = ({ onPress, color, size, icon, style, containerStyle, bottomText, bottomTextStyle }) => {
    return (
        <View style={styles.container}>
            <CIonIcon
                style={style}
                containerStyle={{ ...styles.container, ...containerStyle}}
                name={icon ?? ''}
                color={color ?? Colors.black}
                size={size ?? Sizes.s16}
                onPress={onPress} />
            {
                bottomText != undefined && <SizedBox height={Sizes.s4} />
            }
            {
                bottomText != undefined &&
                <CText data={bottomText}
                    style={bottomTextStyle} />
            }
        </View>
    )
}

export default CIconButton

const styles = StyleSheet.create({
    container: {
        alignSelf: Alignment.baseLine,
        justifyContent: Alignment.center,
        alignItems: Alignment.center,
    }
})
