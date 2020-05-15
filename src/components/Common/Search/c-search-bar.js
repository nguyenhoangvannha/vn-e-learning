import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../../globals/colors';

const CSearchBar = () => {
    const [value, setValue] = useState('')
    return (
        <View/>
    );
}

export default CSearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.transparent,
    }
})
