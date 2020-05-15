import React from 'react'
import { View } from 'react-native'

const Expanded = ({children}) => {
    return (
        <View style={{flex: 1}}>{children}</View>
    )
}

export default Expanded