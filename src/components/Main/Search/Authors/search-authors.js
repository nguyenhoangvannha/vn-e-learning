import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from '../../../../res/styles/styles'
import CText from '../../../Common/Text/c-text'
import ListAuthors from '../../../Author/ListAuthors/list-authors'
import i18n from '../../../../res/i18n'

const SearchAuthors = ({ authorIds }) => {
    return (
        <View style={Styles.screenContainer}>
            <ListAuthors
                authorIds={authorIds}
                headerText={`${authorIds.length} ${i18n.t('results')}`} />
        </View>
    )
}

export default SearchAuthors

const styles = StyleSheet.create({})
