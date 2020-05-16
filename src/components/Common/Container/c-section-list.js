import React from 'react'
import { StyleSheet, SectionList } from 'react-native'
import TextStyles from '../../../globals/text-styles'

const CSectionList = ({sections, keyExtractor, renderItem, renderSectionHeader, ItemSeparatorComponent}) => {
    return (
        <SectionList
            sections={sections}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ItemSeparatorComponent={ItemSeparatorComponent}
        />
    )
}

export default CSectionList

const styles = StyleSheet.create({})
