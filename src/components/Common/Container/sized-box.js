import React from 'react'
import { View } from 'react-native'

const SizedBox = ({ width, height, color, children, style}) => {
    return <View style={{ width: width, height: height, color: color, ...style }}>
        {children}
    </View>
}

export default SizedBox