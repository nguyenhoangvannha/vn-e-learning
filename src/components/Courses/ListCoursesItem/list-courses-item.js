import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import CImage from '../../Common/Image/c-image'
import Sizes from '../../../globals/sizes'
import SectionCourseItemInfo from '../../Main/Home/SectionCoursesItem/section-course-item-info'
import FlexDirection from '../../../globals/flex-direction'
import CIconButton from '../../Common/Button/c-icon-button'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../globals/alignment'
import COpacityButton from '../../Common/Button/c-opacity-button'
import Routes from '../../../routes/routes'
import CIonIcon from '../../Common/Icon/c-ion-icon'
import IconName from '../../../globals/icon-name'

const ListCoursesItem = ({ navigation, style, course }) => {
    
    const onPress = (course) => {
        navigation.navigate(Routes.CourseDetail, {
            course: course,
        });
    }

    return (
        <COpacityButton style={{ ...styles.container, ...style }} onPress={() => onPress(course)}>
            <CImage uri={course.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <SectionCourseItemInfo course={course} />
            </View>
            <SizedBox width={Sizes.s24} style={styles.trailingIcon}>
                <CIonIcon name={IconName.mdMore} style={styles.trailingIcon} />
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
    infoContainer: {
        padding: Sizes.s8,
    },
    trailingIcon: {
        fontSize: Sizes.s20,
        alignSelf: Alignment.center
    }
})
