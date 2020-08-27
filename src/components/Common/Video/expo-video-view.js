import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Audio, Video } from 'expo-av';

export default function CExpoVideoView({ shouldPlay = false, videoRef, uri }) {
    return (
        <View>
            <Video
                ref={videoRef}
                source={{ uri: uri }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={shouldPlay}
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
