import React from 'react'
import { StyleSheet, View } from 'react-native'
import CImage from '../../Common/Image/c-image'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import Sizes from '../../../res/sizes'
import CCard from '../../Common/Container/c-card'
import COpacityButton from '../../Common/Button/c-opacity-button'
import ContentContainer from '../../Common/Screen/content-container'

const PathItem = ({ style, image, name, coursesCount, onPress }) => {
    return (
        <ContentContainer style={style}>
            <COpacityButton onPress={onPress}>
                <CCard borderRadius={Sizes.s0}>
                    <CImage uri={image ?? ''} style={styles.image} />
                    <ContentContainer style={styles.body}>
                        <CText data={name} style={TextStyles.subhead} />
                        <CText data={`${coursesCount} Courses`} style={TextStyles.overline} />
                    </ContentContainer>
                </CCard>
            </COpacityButton>
        </ContentContainer>

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
