import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CardTile from '../../Common/Container/card-tile'
import CImage from '../Image/c-image'
import CText from '../Text/c-text'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import TextStyles from '../../../res/styles/text-styles'
import FontWeight from '../../../globals/font-weight'

const ProfileTileVer = ({ style, image, title, subtitle }) => {
    return (
        <View style={style}>
            <CardTile
                leading={<CImage uri={image} style={styles.image} />}
                title={<CText data={title} style={styles.text}/>}
                subtitle={<CText data={subtitle} />} />
        </View>
    )
}

export default ProfileTileVer

const styles = StyleSheet.create({
    image: {
        width: Sizes.s72,
        height: Sizes.s72,
        borderRadius: Sizes.s36,
    },
    text: {
        ...TextStyles.caption,
        textAlign: Alignment.center,
        fontWeight: FontWeight.bold,
    }
})
