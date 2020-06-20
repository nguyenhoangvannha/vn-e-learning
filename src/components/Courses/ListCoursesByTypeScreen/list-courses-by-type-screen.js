import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import CAppBar from '../../Common/AppBar/c-app-bar'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import ListCourses from '../ListCourses/list-courses'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import { CoursesContext } from '../../../provider/courses-provider'
import { ScreenContainer } from 'react-native-screens'
import ContentContainer from '../../Common/Screen/content-container'

const ListCoursesByTypeScreen = ({ route }) => {
    const params = route.params

    const coursesState = useContext(CoursesContext)

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar />
            <ContentContainer style={Styles.screenContainer}>
                <CText data={params.title} style={TextStyles.headline} />
                <SizedBox height={Sizes.s16} />
                <ListCourses
                    hasTrailing={false}
                    data={params.courseIds} />
            </ContentContainer>
        </ScreenContainer>
    )
}

export default ListCoursesByTypeScreen

const styles = StyleSheet.create({})
