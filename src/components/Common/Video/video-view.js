import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CImage from '../Image/c-image'

const VideoView = ({ uri, style }) => {
    return (
        <View style={style}>
            <CImage uri={uri} width={'100%'} height={'100%'} />
        </View>
    )
}

export default VideoView

const styles = StyleSheet.create({})
