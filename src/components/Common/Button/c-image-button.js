import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Alignment from '../../../globals/alignment'
import CTouchableButton from './c-touchable-button'

const CImageButton = ({ style, uri, children, onPress }) => {
    return (
        <CTouchableButton style={style} onPress={onPress}>
            <ImageBackground style={styles.image} source={{ uri: uri }}>
                {children}
            </ImageBackground>
        </CTouchableButton>
    )
}

export default CImageButton

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        justifyContent: Alignment.center,
        alignItems: Alignment.center,
    }
})
