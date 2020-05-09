import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CText from '../Text/c-text'
import TextStyles from '../../../globals/text-styles'

const ListTile = ({ title, subtitle }) => {
    return (
        <View>
            <CText data={title} style={TextStyles.description} />
            <CText data={subtitle} style={TextStyles.headLine} />
        </View>
    )
}

export default ListTile

const styles = StyleSheet.create({})
