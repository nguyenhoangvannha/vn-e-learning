import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'

const CImage = ({ uri, style ,width, height}) => {
    return (
        <Image
            source={{ uri: uri }}
            style={style}
            containerStyle={{ flex: 1 }}
            PlaceholderContent={<ActivityIndicator />}
        />
    )
}

export default CImage