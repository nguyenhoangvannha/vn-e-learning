import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Colors from '../../../globals/colors';

const CSearchBar = () => {
    const [value, setValue] = useState('')
    return (
        <SearchBar
            value={value}
            onChangeText={(text) => setValue(text)}
            placeholder="Type Here..."
            platform='ios'
            style={styles.container}
        />
    );
}

export default CSearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.transparent,
    }
})
