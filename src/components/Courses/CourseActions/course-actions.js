import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CIconButton from '../../Common/Button/c-icon-button'
import Colors from '../../../globals/colors'
import { Avatar } from 'react-native-paper'
import Alignment from '../../../globals/alignment'
import Sizes from '../../../globals/sizes'
import TextStyles from '../../../globals/text-styles'
import FontWeight from '../../../globals/font-weight'
import FlexDirection from '../../../globals/flex-direction'

const CourseActions = ({ style, course }) => {
    return (
        <View style={styles.container}>
            <CIconButton
                containerStyle={styles.actionButton}
                size={Sizes.s32}
                icon='bookmark'
                bottomText='Bookmark'
                bottomTextStyle={styles.actionButtonText} />
            <CIconButton
                containerStyle={styles.actionButton}
                size={Sizes.s32}
                icon='clock'
                bottomText='Bookmark'
                bottomTextStyle={styles.actionButtonText} />
            <CIconButton
                containerStyle={styles.actionButton}
                size={Sizes.s32}
                icon='save'
                bottomText='Download'
                bottomTextStyle={styles.actionButtonText} />
        </View>
    )
}

export default CourseActions

const styles = StyleSheet.create({
    container: {
        flexDirection: FlexDirection.row,
        justifyContent: Alignment.spaceBetween,
        alignItems: Alignment.center,
    },

    actionButton: {
        backgroundColor: Colors.grey200,
        alignSelf: Alignment.baseLine,
        width: Sizes.s48,
        height: Sizes.s48,
        borderRadius: Sizes.s24,
        padding: Sizes.s4,
        justifyContent: Alignment.center,
    },
    actionButtonText: {
        ...TextStyles.bodyText,
        color: Colors.black,
    }
})
