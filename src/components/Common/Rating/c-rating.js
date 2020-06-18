import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Rating } from 'react-native-elements'
import Sizes from '../../../res/sizes'
import ContentContainer from '../Screen/content-container'
import { ThemeContext } from '../../../provider/theme-provider'

export const RatingType = {
    bell: 'bell',
    heart: 'heart',
    rocket: 'rocket',
    star: 'star',
}

export const CRating = ({ type, ratingCount, imageSize, readonly }) => {
    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    return (
        <Rating
            tintColor={theme.background}
            imageSize={imageSize ?? Sizes.s14}
            ratingCount={ratingCount ?? 0}
            readonly={readonly} />
    )
}

const styles = StyleSheet.create({})
