import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Paths from '../../../Content/Paths/paths'
import Styles from '../../../../res/styles/styles'
import i18n from '../../../../res/i18n'

const SearchPaths = ({ pathIds }) => {
    return (
        <View style={Styles.screenContainer}>
            <Paths
                pathIds={pathIds}
                headerText={`${pathIds.length} ${i18n.t('results')}`}
                horizontal={false}
                hasTrailing={false} />
        </View>
    )
}

export default SearchPaths

const styles = StyleSheet.create({})
