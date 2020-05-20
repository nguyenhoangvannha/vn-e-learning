import React from 'react'
import { StyleSheet, View } from 'react-native'
import CIconButton from '../../Common/Button/c-icon-button'
import Colors from '../../../res/colors'
import Alignment from '../../../res/styles/alignment'
import Sizes from '../../../res/sizes'
import TextStyles from '../../../res/styles/text-styles'
import FlexDirection from '../../../globals/flex-direction'
import IconName from '../../../res/icon-name'

const Item = ({ bottomText, icon }) => <CIconButton
    containerStyle={styles.actionButton}
    size={Sizes.s32}
    icon={icon}
    bottomText={bottomText}
    bottomTextStyle={styles.actionButtonText} />

const CourseActions = ({ style, course }) => {
    return (
        <View style={{...styles.container, ...style}}>
            <Item
                icon={IconName.bookmarkOutline}
                bottomText='Bookmark' />
            <Item
                icon={IconName.iosRadio}
                bottomText='Add to Channel' />
            <Item
                icon={IconName.mdCloudDownload}
                bottomText='Download' />
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
        ...TextStyles.body1,
        color: Colors.black,
    }
})
