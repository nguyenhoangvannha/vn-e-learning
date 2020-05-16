import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Styles from '../../../globals/styles'
import SectionCourses from '../../Main/Home//SectionCourses/section-courses'
import coursesData from '../../../data/mock/courses-mock-data'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import Paths from '../../Content/Paths/paths'
import CScrollView from '../../Common/Container/c-scroll-view'

const SkillsDetail = ({ route }) => {
    const navigation = useNavigation()

    var skills = route.params.skills

    return (
        <View style={Styles.fullScreen}>
            <CAppBar title={skills} />
            <CScrollView style={Styles.body}>
                <Paths
                    headerText={`Paths in ${skills}`} />
                <SectionCourses
                    data={coursesData}
                    headerText={`New in ${skills}`} />
                <SectionCourses
                    data={coursesData}
                    headerText={`Trending in ${skills}`} />
                <ListAuthors
                    headerText={`Top authors in ${skills}`}
                    horizontal={true} />
            </CScrollView>
        </View>
    )
}

export default SkillsDetail

const styles = StyleSheet.create({})
