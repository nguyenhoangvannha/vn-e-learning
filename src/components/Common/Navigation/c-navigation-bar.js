import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomNavigation } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;


const CNavigationBar = () => {

    const [state, setState] = useState({
        index: 0,
        routes: [
            { key: 'music', title: 'Music', icon: 'queue-music' },
            { key: 'albums', title: 'Albums', icon: 'album' },
            { key: 'recents', title: 'Recents', icon: 'history' },
        ],
    });
    const _handleIndexChange = index => setState({ index });

    const _renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });
    return (
        <BottomNavigation
            navigationState={state}
            onIndexChange={_handleIndexChange}
            renderScene={_renderScene}
        />
    );
}

export default CNavigationBar

const styles = StyleSheet.create({})
