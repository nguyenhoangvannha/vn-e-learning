import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Paths from '../../../Content/Paths/paths'
import Styles from '../../../../globals/styles'

const SearchPaths = () => {
    return (
        <View style={Styles.screenContainer}>
            <Paths
                headerText='6 results'
                horizontal={false}
                hasTrailing={false} />
        </View>
    )
}

export default SearchPaths

const styles = StyleSheet.create({})
