import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CText from '../../../Common/Text/c-text'
import Styles from '../../../../res/styles/styles'
import ListCourses from '../../../Courses/ListCourses/list-courses'
import SizedBox from '../../../Common/Container/sized-box'
import Sizes from '../../../../res/sizes'
import i18n from '../../../../res/i18n'

const SearchCourses = ({ courseIds }) => {
    return (
        <View style={Styles.screenContainer}>
            <CText data={i18n.t('skill_levels')} />
            <SizedBox height={Sizes.s8} />
            <ListCourses
                data={courseIds}
                headerText={`${courseIds.length} ${i18n.t('results')}`} />
        </View>
    )
}

export default SearchCourses

const styles = StyleSheet.create({})
