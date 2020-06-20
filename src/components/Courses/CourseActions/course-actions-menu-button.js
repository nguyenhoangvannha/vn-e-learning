import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import MenuButton from '../../Common/Menu/menu-button'
import CMenuItem from '../../Common/Menu/c-menu-item'
import IconName from '../../../res/icon-name'
import i18n from '../../../res/i18n'
import { CoursesContext } from '../../../provider/courses-provider'
import { FavouritesContext } from '../../../provider/favourites-provider'

const CourseActionsMenuButton = ({ courseId }) => {
    const courseState = useContext(CoursesContext)
    const favouritesContext = useContext(FavouritesContext)
    var isFavourite = favouritesContext.favouriteCourses.has(courseId ?? '') ?? false;

    return (
        <MenuButton
            menuOptions={[
                <CMenuItem
                    title={isFavourite ? i18n.t('remove_favourite') : i18n.t('favourite')}
                    iconName={IconName.mdHeart}
                    onPress={
                        () => {
                            isFavourite ?
                                favouritesContext.removeFavouriteCourse(courseId)
                                : favouritesContext.addFavouriteCourse(courseId)
                        }
                    }
                />,
                <CMenuItem title={i18n.t('add_to_channel')} iconName={IconName.iosRadio} />,
                <CMenuItem title={i18n.t('download')} iconName={IconName.mdCloudDownload} />,
            ]}
        />
    )
}

export default CourseActionsMenuButton

const styles = StyleSheet.create({})
