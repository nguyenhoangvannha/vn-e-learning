import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CIconButton from '../../Common/Button/c-icon-button'
import Colors from '../../../res/colors'
import Alignment from '../../../res/styles/alignment'
import Sizes from '../../../res/sizes'
import TextStyles from '../../../res/styles/text-styles'
import FlexDirection from '../../../res/styles/flex-direction'
import IconName from '../../../res/icon-name'
import i18n from '../../../res/i18n'
import { FavouritesContext } from '../../../provider/favourites-provider'
import { useSelector, useDispatch } from 'react-redux'

const Item = ({ bottomText, icon, onPress }) => {
    return (
        <CIconButton
            onPress={onPress}
            containerStyle={styles.actionButton}
            size={Sizes.s32}
            icon={icon}
            bottomText={bottomText}
            bottomTextStyle={styles.actionButtonText} />
    )
}

const CourseActions = ({ style, courseId }) => {


    const userState = useSelector(state => state.userState)

    const dispatch = useDispatch();

    const favouritesContext = useContext(FavouritesContext)

    var isFavourite = favouritesContext.favouriteCourses.has(courseId ?? '') ?? false;

    return (
        <View style={{ ...styles.container, ...style }}>
            <Item
                icon={IconName.bookmarkOutline}
                bottomText={isFavourite ? i18n.t('remove_favourite') : i18n.t('favourite')}
                onPress={() => {
                    isFavourite ?
                        favouritesContext.removeFavouriteCourse(courseId)
                        : favouritesContext.addFavouriteCourse(courseId)
                }} />
            <Item
                icon={IconName.iosRadio}
                bottomText={i18n.t('add_to_channel')} />
            {/* <Item
                icon={IconName.mdCloudDownload}
                bottomText={i18n.t('download')} /> */}
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
