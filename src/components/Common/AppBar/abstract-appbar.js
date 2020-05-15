import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Sizes from '../../../globals/sizes'
import Alignment from '../../../globals/alignment'
import FlexDirection from '../../../globals/flex-direction'

const AbstractAppbar = ({ leading, title, middle, trailing }) => {
    return (
        <SafeAreaView >
            <View style={styles.container}>
                {leading}
                {title}
                {middle}
                {trailing}
            </View>
        </SafeAreaView>
    )
}

export default AbstractAppbar

const styles = StyleSheet.create({
    container: {
        height: Sizes.s48,
        alignItems: Alignment.center,
        justifyContent: Alignment.flexStart,
        alignContent: Alignment.center,
        flexDirection: FlexDirection.row,
        paddingHorizontal: Sizes.s16,
    },
})
