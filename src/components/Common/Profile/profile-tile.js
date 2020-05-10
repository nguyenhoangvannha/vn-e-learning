
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from '../../../globals/styles'
import CText from '../Text/c-text'
import TextStyles from '../../../globals/text-styles'
import Sizes from '../../../globals/sizes'
import Alignment from '../../../globals/alignment'
import CAvatar from '../Image/c-avatar'
import ListTile from '../Container/list-tile'

const ProfileTile = ({ style, image, title, subtitle }) => {
    return (
        <View style={style}>
            <ListTile
                leading={<CAvatar size={Sizes.s48} uri={image ?? ''} />}
                title={<CText data={title} style={TextStyles.subhead} />}
                subtitle={<CText data={subtitle} style={TextStyles.overline} />} />
        </View>
    )
}

export default ProfileTile

const styles = StyleSheet.create({
    info: {
        paddingHorizontal: Sizes.s16,
        justifyContent: Alignment.center
    }
})
