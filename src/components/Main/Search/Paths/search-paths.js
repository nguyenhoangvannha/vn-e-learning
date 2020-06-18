import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Paths from '../../../Content/Paths/paths'
import Styles from '../../../../res/styles/styles'
import i18n from '../../../../res/i18n'
import ContentContainer from '../../../Common/Screen/content-container'

const SearchPaths = ({ pathIds }) => {
    return (
        <ContentContainer style={Styles.screenContainer}>
            <Paths
                pathIds={pathIds}
                headerText={`${pathIds.length} ${i18n.t('results')}`}
                horizontal={false}
                hasTrailing={false} />
        </ContentContainer>
    )
}

export default SearchPaths

const styles = StyleSheet.create({})
