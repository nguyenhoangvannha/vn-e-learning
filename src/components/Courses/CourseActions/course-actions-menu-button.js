import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import MenuButton from '../../Common/Menu/menu-button'
import CMenuItem from '../../Common/Menu/c-menu-item'
import IconName from '../../../res/icon-name'
import i18n from '../../../res/i18n'
import { useSelector, useDispatch } from 'react-redux'
import { Status } from '../../../core/status'
import { DO_ADD_FAVOURITE_COURSE_USER_ACTION, DoAddFavouriteCourseUserAction } from '../../../feature/user/actions'

const CourseActionsMenuButton = ({ courseId }) => {

    const [addFavouriteStatus, setAddFavouriteStatus] = useState(Status.idle())

    const courseState = useSelector(state => state.courseState)

    const userState = useSelector(state => state.userState)

    const dispatch = useDispatch();

    const [favourite, setFavourite] = useState(false)


    useEffect(() => {

        setAddFavouriteStatus(userState.status[`${DO_ADD_FAVOURITE_COURSE_USER_ACTION}${courseId}`])

        courseState.favouriteCourses.forEach((value) => {
            if (value.id === courseId) setFavourite(true)
        })

        return () => {
            //cleanup
        }
    }, [userState, courseState])

    const onPressFavourite = () => {
        dispatch(DoAddFavouriteCourseUserAction(courseId))
    }


    return (
        <MenuButton
            menuOptions={[
                <CMenuItem
                    title={favourite ? i18n.t('remove_favourite') : i18n.t('favourite')}
                    iconName={IconName.mdHeart}
                    onPress={
                        () => onPressFavourite()
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
