//https://infinitered.github.io/ionicons-version-3-search/

import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sizes from '../../../globals/sizes';

const CIonIcon = ({ name, style, size, onPress, paddingHorizontal }) => {
    return (
        <Ionicons name={name} style={{ paddingHorizontal: paddingHorizontal ?? Sizes.s8, ...style }} size={size ?? Sizes.s24} onPress={onPress} />
    )
}

export default CIonIcon