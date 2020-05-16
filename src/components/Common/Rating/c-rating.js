import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Rating } from 'react-native-elements'
import Sizes from '../../../globals/sizes'

export const RatingType = {
    bell: 'bell',
    heart: 'heart',
    rocket: 'rocket',
    star: 'star',
}

export const CRating = ({ type, ratingCount, imageSize, readonly }) => {
    return (
        <Rating
            type={type ?? RatingType.star}
            imageSize={imageSize ?? Sizes.s14}
            ratingCount={ratingCount ?? 0} 
            readonly={readonly}/>
    )
}

const styles = StyleSheet.create({})
