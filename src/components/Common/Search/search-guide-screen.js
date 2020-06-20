import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyScreen from '../Screen/empty-screen'
import IconName from '../../../res/icon-name'
import i18n from '../../../res/i18n'

export default function SearchGuideScreen() {
    return (
        <EmptyScreen
        uri={IconName.mdSearch}
        title={i18n.t('search_guide_title')}
        subtitle={''}/>
    )
}

const styles = StyleSheet.create({})
