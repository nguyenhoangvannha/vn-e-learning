import React from 'react'
import { Button } from 'react-native-elements'

const CButton = (props) => {
    return (
        <Button title={props.title}
            type={props.type}
            style={props.style}
            loading={props.loading}
            disabled={props.disabled} />
    )
}

export default CButton
