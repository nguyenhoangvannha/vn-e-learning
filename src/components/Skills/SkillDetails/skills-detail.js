import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Styles from '../../../globals/styles'
import SectionCourses from '../../Main/Home//SectionCourses/section-courses'
import coursesData from '../../../data/mock/courses-mock-data'

const SkillsDetail = ({ route }) => {
    const navigation = useNavigation()

    var skills = route.params.skills

    return (
        <View style={Styles.fullScreen}>
            <CAppBar title={skills} />
            <View style={Styles.body}>
                <SectionCourses
                    data={coursesData}
                    headerText={`New in ${skills}`} />
            </View>
        </View>
    )
}

export default SkillsDetail

const styles = StyleSheet.create({})
