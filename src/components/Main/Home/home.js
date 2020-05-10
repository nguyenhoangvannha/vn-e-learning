import React from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../globals/styles'
import SectionCourses from './SectionCourses/section-courses'
import Sizes from '../../../globals/sizes'
import coursesData from '../../../data/mock/courses-mock-data'
import SizedBox from '../../Common/Container/sized-box'
import CScrollView from '../../Common/Container/c-scroll-view'
import CImageButton from '../../Common/Button/c-image-button'
import Strings from '../../../globals/strings'
import CText from '../../Common/Text/c-text'
import Alignment from '../../../globals/alignment'
import TextStyles from '../../../globals/text-styles'

const Home = () => {
    return (
        <CScrollView>
            <View style={Styles.screenContainer}>
                <CImageButton
                    uri={Strings.defaultCourseThubnail}
                    style={styles.coursesBanner}
                    onPress={() => console.log('NEW RELEASE')}>
                    <CText data='NEW RELEASE' style={TextStyles.title} />
                </CImageButton>
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
    coursesBanner: {
        height: '15%',
        justifyContent: Alignment.center,
        alignItems: Alignment.center
    },
    sectionCourses: {
        padding: Sizes.s8,
    },
})
