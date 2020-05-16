import React from 'react'
import { Text } from 'react-native'

const CText = ({ style, data, numberOfLines }) => {
    return (
        <Text style={style} numberOfLines={numberOfLines}>
            {data}
        </Text>
    )
}

export default CText