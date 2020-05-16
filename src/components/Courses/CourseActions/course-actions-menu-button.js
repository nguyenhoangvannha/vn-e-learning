import React from 'react'
import { StyleSheet } from 'react-native'
import MenuButton from '../../Common/Menu/menu-button'
import CMenuItem from '../../Common/Menu/c-menu-item'
import IconName from '../../../globals/icon-name'

const CourseActionsMenuButton = () => {
    return (
        <MenuButton
            menuOptions={[
                <CMenuItem title='Bookmark' iconName={IconName.bookmarkOutline} />,
                <CMenuItem title='Add to Channel' iconName={IconName.iosRadio} />,
                <CMenuItem title='Downloads' iconName={IconName.mdCloudDownload} />,
            ]}
        />
    )
}

export default CourseActionsMenuButton

const styles = StyleSheet.create({})
