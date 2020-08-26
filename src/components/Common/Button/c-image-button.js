import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import Alignment from '../../../res/styles/alignment'
import CTouchableButton from './c-touchable-button'
import CText from '../Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import Colors from '../../../res/colors'

const CImageButton = ({ style, uri, children, onPress, width, height, title }) => {
    return (
        <CTouchableButton style={{ ...style, height: height, width: width }} onPress={onPress}>
            <ImageBackground style={styles.image} source={{ uri: uri }}>
                {title != undefined && <CText data={title} style={{ ...TextStyles.title, color: Colors.white }} />}
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
