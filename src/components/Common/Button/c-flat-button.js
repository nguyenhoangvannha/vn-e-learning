import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CText from '../Text/c-text'
import FlexDirection from '../../../globals/flex-direction'

const CFlatButton = ({ style, leading, title, titleStyle, trailing }) => {
    return (
        <View style={{ ...style, flexDirection: FlexDirection.row, }}>
            {leading}
            <CText data={title} style={titleStyle} />
            {trailing}
        </View>
    )
}

export default CFlatButton

const styles = StyleSheet.create({})
