import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../globals/text-styles'

const AuthorItemInfo = ({style, author}) => {
    return (
        <View style={style}>
            <CText data={author.name} style={TextStyles.headLine}/>
            <CText data={`${author.coursesCount} Courses`} style={TextStyles.smallCaption}/>
        </View>
    )
}

export default AuthorItemInfo

const styles = StyleSheet.create({})
