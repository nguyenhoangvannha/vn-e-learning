import React from 'react'
import { Button } from 'react-native-elements'
import Colors from '../../../globals/colors'

const CButton = (props) => {
    return (
        <Button title={props.title}
            type={props.type}
            style={props.style}
            containerStyle={props.style}
            titleStyle={props.titleStyle}
            linearGradientProps={{
                colors: [props.color ?? Colors.blue500, props.color ?? Colors.blue500],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
            loading={props.loading}
            disabled={props.disabled}/>
    )
}

export default CButton
