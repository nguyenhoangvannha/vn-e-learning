import React from 'react'
import { StyleSheet, View } from 'react-native'
import CImage from '../../Common/Image/c-image'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import Sizes from '../../../res/sizes'
import CCard from '../../Common/Container/c-card'
import Styles from '../../../res/styles/styles'
import COpacityButton from '../../Common/Button/c-opacity-button'
import ContentContainer from '../../Common/Screen/content-container'

const PathItemVer = ({ image, name, coursesCount, onPress }) => {
    return (
        <COpacityButton onPress={onPress}>
            <CCard borderRadius={Sizes.s0}>
                <ContentContainer style={Styles.row} >
                    <CImage uri={image ?? ''} width={Sizes.s80} height={Sizes.s80} />
                    <View style={styles.body}>
                        <CText data={name} style={TextStyles.subhead} numberOfLines={2} />
                        <CText data={`${coursesCount} Courses`} style={TextStyles.overline} />
                    </View>
                </ContentContainer>
            </CCard>
        </COpacityButton>
    )
}

export default PathItemVer

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: Sizes.s8,
        paddingVertical: Sizes.s4,
    }
})
