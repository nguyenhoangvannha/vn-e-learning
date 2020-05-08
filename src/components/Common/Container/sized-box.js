import React from 'react'
import { View } from 'react-native'

const SizedBox = (props) => {
    return <View style={{ width: props.width, height: props.height, color: props.color }}></View>
}

export default SizedBox