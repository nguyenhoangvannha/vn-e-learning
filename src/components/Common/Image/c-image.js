import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'

const CImage = ({ uri, style ,width, height, containerStyle}) => {
    return (
        <Image
            source={{ uri: uri }}
            style={style}
            containerStyle={containerStyle ?? { flex: 1 }}
            width={width}
            height={height}
            PlaceholderContent={<ActivityIndicator />}
        />
    )
}

export default CImage