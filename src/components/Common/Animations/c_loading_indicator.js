import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

export default function CLoadingIndicator() {
    return (
        <ActivityIndicator style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center',}}/>
    )
}

const styles = StyleSheet.create({})
