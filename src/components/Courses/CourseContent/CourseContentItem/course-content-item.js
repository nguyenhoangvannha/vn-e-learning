import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CImage from '../../../Common/Image/c-image'
import Strings from '../../../../res/strings'
import Sizes from '../../../../res/sizes'
import ListTile from '../../../Common/Container/list-tile'
import CText from '../../../Common/Text/c-text'
import CIonIcon from '../../../Common/Icon/c-ion-icon'
import IconName from '../../../../res/icon-name'
import i18n from '../../../../res/i18n'
import COpacityButton from '../../../Common/Button/c-opacity-button'

const CourseContentItem = ({ data }) => {
    return (
        <ListTile
            leading={<CImage
                uri={Strings.defaultCourseThubnail}
                width={Sizes.s60}
                height={Sizes.s60} />}
            title={<CText
                data={data.name} />}
            subtitle={<CText
                data={`${data.hours} ${i18n.t('hours')}`} />}
            trailing={<CIonIcon
                name={IconName.mdMore} />}
        />
    )
}

export default CourseContentItem
