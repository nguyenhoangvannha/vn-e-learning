import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CText from '../Text/c-text'
import FlexDirection from '../../../res/styles/flex-direction'
import COpacityButton from './c-opacity-button'

const CFlatButton = ({ style, leading, title, titleStyle, trailing , onPress}) => {
    return (
        <COpacityButton onPress={onPress} style={{ ...style, flexDirection: FlexDirection.row, }}>
            {leading}
            <CText data={title} style={titleStyle} />
            {trailing}
        </COpacityButton>
    )
}

export default CFlatButton

const styles = StyleSheet.create({})
