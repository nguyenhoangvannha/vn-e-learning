import React, { useState } from "react";

import { StyleSheet, Text, View, Picker } from 'react-native'

const CPicker = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.container}>
            <Picker
                mode='dropdown'
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    )
}

export default CPicker

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
})
