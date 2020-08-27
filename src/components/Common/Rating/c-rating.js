import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Sizes from '../../../res/sizes'
import { ThemeContext } from '../../../provider/theme-provider'
import { Rating, AirbnbRating } from 'react-native-ratings';

export const RatingType = {
    bell: 'bell',
    heart: 'heart',
    rocket: 'rocket',
    star: 'star',
}

export const CRating = ({ style, type, ratingCount, imageSize, readonly = true }) => {
    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme
    return (
        <Rating
            type={type ?? RatingType.star}
            ratingCount={ratingCount ?? 0}
            imageSize={imageSize ?? Sizes.s14}
            showRating={false}
            style={{ paddingHorizontal: 10 }}
            readonly={readonly}
        />
    )
}

const styles = StyleSheet.create({})
