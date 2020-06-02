import React from 'react'
import { StyleSheet } from 'react-native'
import MenuButton from '../../Common/Menu/menu-button'
import CMenuItem from '../../Common/Menu/c-menu-item'
import IconName from '../../../res/icon-name'
import i18n from '../../../res/i18n'

const CourseActionsMenuButton = () => {
    return (
        <MenuButton
            menuOptions={[
                <CMenuItem title={i18n.t('bookmark')} iconName={IconName.bookmarkOutline} />,
                <CMenuItem title={i18n.t('add_to_channel')} iconName={IconName.iosRadio} />,
                <CMenuItem title={i18n.t('download')} iconName={IconName.mdCloudDownload} />,
            ]}
        />
    )
}

export default CourseActionsMenuButton

const styles = StyleSheet.create({})
