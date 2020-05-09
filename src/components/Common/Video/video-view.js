import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CImage from '../Image/c-image'

const VideoView = ({uri, style}) => {
    return (
        <View style={style}>
            <CImage uri={uri}/>
        </View>
    )
}

export default VideoView

const styles = StyleSheet.create({})
