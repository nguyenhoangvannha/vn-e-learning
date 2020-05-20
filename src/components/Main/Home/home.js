import React from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import Sizes from '../../../res/sizes'
import coursesData from '../../../data/mock/courses-mock-data'
import SizedBox from '../../Common/Container/sized-box'
import CScrollView from '../../Common/Container/c-scroll-view'
import CImageButton from '../../Common/Button/c-image-button'
import Strings from '../../../res/strings'
import CText from '../../Common/Text/c-text'
import Alignment from '../../../res/styles/alignment'
import TextStyles from '../../../res/styles/text-styles'
import Colors from '../../../res/colors'
import SectionCourses from '../../Courses/SectionCourses/section-courses'
import HomeAppBar from '../../Common/AppBar/home-app-bar'
import i18n from '../../../res/i18n'

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
            <HomeAppBar title={i18n.t('home')} hasBack={false} />
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
