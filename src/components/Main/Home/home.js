import React from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../globals/styles'
import SectionCourses from './SectionCourses/section-courses'
import Sizes from '../../../globals/sizes'
import coursesData from '../../../data/mock/courses-mock-data'
import SizedBox from '../../Common/Container/sized-box'
import CScrollView from '../../Common/Container/c-scroll-view'

const Home = () => {
    return (
        <CScrollView>
            <View style={Styles.screenContainer}>
                <SectionCourses
                    headerText='Software development'
                    data={coursesData}
                    style={styles.sectionCourses}
                />
                <SizedBox height={Sizes.s12} />
                <SectionCourses
                    headerText='IT operations'
                    data={coursesData}
                    style={styles.sectionCourses}
                />
                <SectionCourses
                    headerText='Data professional'
                    data={coursesData}
                    style={styles.sectionCourses}
                />
                <SectionCourses
                    headerText='Security professional'
                    data={coursesData}
                    style={styles.sectionCourses}
                />
            </View>
        </CScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    sectionCourses: {
        padding: Sizes.s8,
    },
})
