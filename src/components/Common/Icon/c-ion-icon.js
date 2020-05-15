import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
//https://infinitered.github.io/ionicons-version-3-search/
const CIonIcon = ({name, style, size, onPress}) => {
    return (
        <Ionicons name={name} style={style} size={size} onPress={onPress}/>
    )
}

export default CIonIcon