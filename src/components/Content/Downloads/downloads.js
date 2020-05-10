import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyScreen from '../../Common/Screen/empty-screen'

const Downloads = () => {
    return (
        <View style={styles.container}>
            <EmptyScreen
                uri='cloud-download'
                title='No Downloads'
                subtitle='Courses you download will appear here' />
        </View>
    )
}

export default Downloads

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})
