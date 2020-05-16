import React from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../globals/styles'
import Sizes from '../../../globals/sizes'
import coursesData from '../../../data/mock/courses-mock-data'
import SizedBox from '../../Common/Container/sized-box'
import CScrollView from '../../Common/Container/c-scroll-view'
import CImageButton from '../../Common/Button/c-image-button'
import Strings from '../../../globals/strings'
import CText from '../../Common/Text/c-text'
import Alignment from '../../../globals/alignment'
import TextStyles from '../../../globals/text-styles'
import Colors from '../../../globals/colors'
import HomeAppBar from '../home-app-bar'
import SectionCourses from '../../Courses/SectionCourses/section-courses'


const Home = ({ navigation }) => {
    const buildSectionCourses = (title) => {
        return <SectionCourses
            headerText={title}
            data={coursesData}
            style={styles.sectionCourses}
            navigation={navigation}
        />
    }

    return (
        <View style={Styles.fullScreen}>
            <HomeAppBar title={'Home'} hasBack={false}/>
            <CScrollView>
                <View style={Styles.screenContainer}>
                    <CImageButton
                        uri={Strings.defaultCourseThubnail}
                        style={styles.coursesBanner}
                        height={'15%'}
                        onPress={() => console.log('NEW RELEASE')}>
                        <CText data='NEW RELEASE' style={{ ...TextStyles.headline, color: Colors.white }} />
                    </CImageButton>
                    {buildSectionCourses('Software development')}
                    <SizedBox height={Sizes.s12} />
                    {buildSectionCourses('IT operations')}
                    {buildSectionCourses('Data professional')}
                    {buildSectionCourses('Security professional')}
                    <SizedBox height={Sizes.s160} />
                </View>
            </CScrollView>
        </View>
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
