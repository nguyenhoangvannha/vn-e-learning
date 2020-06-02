import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Switch } from 'react-native-paper'

const CSwitch = ({ style, onValueChange , initValue}) => {
    const [switched, setSwitched] = useState(initValue ?? false)

    const onChange = (switched) => {
        setSwitched(switched)
        if (onValueChange != undefined) onValueChange(switched)
    }
    
    return (
        <View style={style}>
            <Switch
                value={switched}
                onValueChange={onChange} />
        </View>
    )
}

export default CSwitch

const styles = StyleSheet.create({})
