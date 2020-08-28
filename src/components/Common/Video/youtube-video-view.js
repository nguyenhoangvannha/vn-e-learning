import React, { useState, useCallback, useRef } from "react";
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import CImage from '../Image/c-image'
import YoutubePlayer from "react-native-youtube-iframe";


const CYoutubeVideoView = ({ videoId }) => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <YoutubePlayer
            height={220}
            play={playing}
            videoId={videoId} //iee2TATGMyI
            onChangeState={onStateChange}
        />
        /* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */
    );
}

export default CYoutubeVideoView

const styles = StyleSheet.create({})
