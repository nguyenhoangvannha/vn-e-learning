import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sizes from '../../../globals/sizes';
//https://infinitered.github.io/ionicons-version-3-search/
const CIonIcon = ({name, style, size, onPress}) => {
    return (
        <Ionicons name={name} style={style} size={size ?? Sizes.s24} onPress={onPress}/>
    )
}

export default CIonIcon