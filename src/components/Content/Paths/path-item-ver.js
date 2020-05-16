import React from 'react'
import { StyleSheet, View } from 'react-native'
import CImage from '../../Common/Image/c-image'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../globals/text-styles'
import Sizes from '../../../globals/sizes'
import CCard from '../../Common/Container/c-card'
import Styles from '../../../globals/styles'

const PathItemVer = ({ image, name, coursesCount }) => {
    return (
        <CCard borderRadius={Sizes.s0}>
            <View style={Styles.row} >
                <CImage uri={image ?? ''} containerStyle={styles.image} />
                <View style={styles.body}>
                    <CText data={name} style={TextStyles.subhead} numberOfLines={2} />
                    <CText data={`${coursesCount} Courses`} style={TextStyles.overline} />
                </View>
            </View>
        </CCard>
    )
}

export default PathItemVer

const styles = StyleSheet.create({
    image: {
        height: Sizes.s80,
        width: Sizes.s80,
    },
    body: {
        paddingHorizontal: Sizes.s8,
        paddingVertical: Sizes.s4,
    }
})
