import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import Colors from '../../../globals/colors'
import Sizes from '../../../globals/sizes'

const CCard = (props) => {
    return (
        <Card style={styles.container, {...props.style}}>
            {props.child}
        </Card>
    )
}

export default CCard

const styles = StyleSheet.create({
    container: {
        borderRadius: Sizes.s8,
    }
})
