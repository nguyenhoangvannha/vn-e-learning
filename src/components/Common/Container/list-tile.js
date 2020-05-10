import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CText from '../Text/c-text'
import TextStyles from '../../../globals/text-styles'

const ListTile = ({ title, subtitle }) => {
    return (
        <View>
            <CText data={title} style={TextStyles.caption} />
            <CText data={subtitle} style={TextStyles.subhead} />
        </View>
    )
}

export default ListTile

const styles = StyleSheet.create({})
