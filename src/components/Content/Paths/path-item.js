import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CardTile from '../../Common/Container/card-tile'
import CImage from '../../Common/Image/c-image'
import Strings from '../../../globals/strings'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../globals/text-styles'
import Sizes from '../../../globals/sizes'
import CCard from '../../Common/Container/c-card'

const PathItem = ({ style, image, name, coursesCount }) => {
    return (
        <CCard style={style} borderRadius={Sizes.s0}>
            <CImage uri={image ?? ''} style={styles.image} />
            <View style={styles.body}>
                <CText data={name} style={TextStyles.subhead} />
                <CText data={`${coursesCount} Courses`} style={TextStyles.overline} />
            </View>
        </CCard>
    )
}

export default PathItem

const styles = StyleSheet.create({
    image: {
        height: Sizes.s80,
        width: Sizes.s200,
    },
    body: {
        paddingHorizontal: Sizes.s8,
        paddingVertical: Sizes.s4,
    }
})
