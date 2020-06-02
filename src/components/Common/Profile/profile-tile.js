
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import CText from '../Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import CAvatar from '../Image/c-avatar'
import ListTile from '../Container/list-tile'
import COpacityButton from '../Button/c-opacity-button'

const ProfileTile = ({ style, image, title, subtitle, onPress }) => {
    return (
        <COpacityButton style={style} onPress={onPress}>
            <ListTile
                leading={<CAvatar size={Sizes.s48} uri={image ?? ''} />}
                title={<CText data={title} style={TextStyles.subhead} />}
                subtitle={<CText data={subtitle} style={TextStyles.overline} />} />
        </COpacityButton>
    )
}

export default ProfileTile

const styles = StyleSheet.create({
    info: {
        paddingHorizontal: Sizes.s16,
        justifyContent: Alignment.center
    }
})
