import React from 'react'
import { View } from 'react-native'

const SizedBox = ({ width, height, color }) => {
    return <View style={{ width: width, height: height, color: color }}>
    </View>
}

export default SizedBox