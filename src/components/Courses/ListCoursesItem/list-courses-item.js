import React from 'react'
import { StyleSheet, View } from 'react-native'
import CImage from '../../Common/Image/c-image'
import Sizes from '../../../globals/sizes'
import FlexDirection from '../../../globals/flex-direction'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../globals/alignment'
import COpacityButton from '../../Common/Button/c-opacity-button'
import Routes from '../../../routes/routes'
import CIonIcon from '../../Common/Icon/c-ion-icon'
import IconName from '../../../globals/icon-name'
import SectionCourseItemInfo from '../SectionCoursesItem/section-course-item-info'
import * as RootNavigation from '../../../routes/navigations/root-navigation'
import MenuButton from '../../Common/Menu/menu-button'
import MenuItem from '../../Common/Menu/menu-item'

const ListCoursesItem = ({ navigation, style, course }) => {

    const onPress = (course) => {
        RootNavigation.navigate(Routes.CourseDetail, {
            course: course,
        });
    }

    return (
        <COpacityButton style={{ ...styles.container, ...style }} onPress={() => onPress(course)}>
            <CImage uri={course.image} style={styles.image} />
            <SectionCourseItemInfo course={course} />
            <SizedBox width={Sizes.s24} style={styles.trailingIcon}>
                <MenuButton
                    menuOptions={[
                        <MenuItem title='Bookmark' />,
                        <MenuItem title='Add to Channel' />,
                        <MenuItem title='Downloads' />,
                    ]}
                />
            </SizedBox>
        </COpacityButton>
    )
}

export default ListCoursesItem

const styles = StyleSheet.create({
    container: {
        flexDirection: FlexDirection.row,
    },
    image: {
        height: Sizes.s68,
        width: Sizes.s84,
        margin: Sizes.s8
    },
    trailingIcon: {
        fontSize: Sizes.s20,
        alignSelf: Alignment.center
    }
})
