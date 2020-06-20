import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import Colors from '../../../res/colors'
import Sizes from '../../../res/sizes'
import ContentContainer from '../Screen/content-container'

const CCard = ({ style, children, elevation, borderRadius }) => {
    return (
        <ContentContainer>
            <Card
                style={styles.container, { ...style, borderRadius: borderRadius }}
                elevation={elevation ?? Sizes.s4}>
                {children}
            </Card>
        </ContentContainer>
    )
}

export default CCard

const styles = StyleSheet.create({
    container: {
        borderRadius: Sizes.s8,
    }
})
