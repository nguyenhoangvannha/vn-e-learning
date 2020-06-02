import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListTile from '../../Common/Container/list-tile'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'

const ProfileItem = ({ style, title, subtitle }) => {
    return (
        <View style={style}>
            <ListTile
                title={<CText data={title} style={TextStyles.caption} />}
                subtitle={<CText data={subtitle} style={TextStyles.subhead} />} />
        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({})
