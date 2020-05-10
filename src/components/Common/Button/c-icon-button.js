import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import Colors from '../../../globals/colors'
import Sizes from '../../../globals/sizes'
import { Icon } from 'react-native-elements'
import Alignment from '../../../globals/alignment'
import CText from '../Text/c-text'
import SizedBox from '../Container/sized-box'

const CIconButton = ({ onPress, color, size, icon, style, containerStyle, bottomText, bottomTextStyle }) => {
    return (
        <View style={styles.container}>
            <Icon
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
