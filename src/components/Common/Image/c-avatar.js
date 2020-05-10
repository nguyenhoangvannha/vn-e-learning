import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import Strings from '../../../globals/strings'

const CAvatar = ({ uri, size, onPress }) => {
    return (
        <Avatar
            size={size ?? 'small'}
            rounded
            source={{
                uri: uri ?? Strings.defaultAvatar,
            }}
            onPress={onPress}
        />

    )
}

export default CAvatar

const styles = StyleSheet.create({})
