import React from 'react'
import { ActivityIndicator} from 'react-native'
import { Image } from 'react-native-elements'

const CImage = (props) => {
    return (
        <Image
            source={{ uri: props.uri }}
            style={props.style}
            PlaceholderContent={<ActivityIndicator />}
        />
    )
}

export default CImage