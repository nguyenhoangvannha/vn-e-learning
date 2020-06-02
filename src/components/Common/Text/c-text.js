import React from 'react'
import { Text } from 'react-native'

const CText = ({ style, data, numberOfLines , children}) => {
    return (
        <Text style={style} numberOfLines={numberOfLines}>
            {data || children}
        </Text>
    )
}

export default CText