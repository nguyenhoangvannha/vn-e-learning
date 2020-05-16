import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from '../../../../globals/styles'
import CText from '../../../Common/Text/c-text'
import ListAuthors from '../../../Author/ListAuthors/list-authors'

const SearchAuthors = () => {
    return (
        <View style={Styles.screenContainer}>
            <ListAuthors
                headerText='6 Results' />
        </View>
    )
}

export default SearchAuthors

const styles = StyleSheet.create({})
