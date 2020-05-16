//https://infinitered.github.io/ionicons-version-3-search/

import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sizes from '../../../globals/sizes';
import { StyleSheet } from 'react-native'

const CIonIcon = ({ name, style, size, onPress }) => {
    return (
        <Ionicons name={name} style={{ ...styles.container, ...style }} size={size ?? Sizes.s24} onPress={onPress} />
    )
}

export default CIonIcon

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Sizes.s8
    }
})
