import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CImage from '../../../Common/Image/c-image'
import Strings from '../../../../globals/strings'
import Sizes from '../../../../globals/sizes'
import ListTile from '../../../Common/Container/list-tile'
import CText from '../../../Common/Text/c-text'
import CIonIcon from '../../../Common/Icon/c-ion-icon'
import IconName from '../../../../globals/icon-name'

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
                data={data.length} />}
            trailing={<CIonIcon
                name={IconName.mdMore} />}
        />
    )
}

export default CourseContentItem
