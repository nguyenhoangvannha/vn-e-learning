import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Audio, Video } from 'expo-av';

export default function CExpoVideoView({ shouldPlay = true, videoRef }) {
    return (
        <View>
            <Video
                ref={videoRef}
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={false}
                isLooping={false}
                useNativeControls={true}
                style={{
                    //width: 300,
                    height: 220
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
