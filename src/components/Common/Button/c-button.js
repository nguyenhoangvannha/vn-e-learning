import React from 'react'
import { Button } from 'react-native-elements'
import Colors from '../../../res/colors'
import { StyleSheet } from 'react-native'

const CButton = ({ onPress, title, type, style, titleStyle, color, loading, disabled, icon, iconRight }) => {
    return (
        <Button
            onPress={onPress}
            title={title}
            type={type}
            style={style}
            containerStyle={style}
            titleStyle={titleStyle}
            linearGradientProps={{
                colors: [color ?? Colors.blue500, color ?? Colors.blue500],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
            loading={loading}
            disabled={disabled}
            icon={icon}
            iconRight={iconRight ?? false}
        />
    )
}

export default CButton