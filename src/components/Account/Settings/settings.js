import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CAppBar from '../../Common/AppBar/app-bar'
import Styles from '../../../globals/styles'

const Settings = () => {
    return (
        <View style={Styles.fullScreen}>
            <CAppBar title='Settings'/>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})
