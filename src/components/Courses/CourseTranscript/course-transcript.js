import React from 'react'
import { StyleSheet } from 'react-native'
import EmptyScreen from '../../Common/Screen/empty-screen'
import IconName from '../../../globals/icon-name'

const CourseTranscript = () => {
    return (
        <EmptyScreen
            uri={IconName.iosText}
            title='No Transcript'
            subtitle='Please check again later' />
    )
}

export default CourseTranscript

const styles = StyleSheet.create({})
