import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Styles from '../../../res/styles/styles'
import CImage from '../../Common/Image/c-image'
import Strings from '../../../res/strings'
import Sizes from '../../../res/sizes'
import ListTileText from '../../Common/Container/list-tile-text'
import i18n from '../../../res/i18n'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import SizedBox from '../../Common/Container/sized-box'
import CSectionList from '../../Common/Container/c-section-list'
import CSectionHeader from '../../Common/Container/c-section-header'
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item'
import { CoursesContext } from '../../../provider/courses-provider'

const PathScreen = ({ route }) => {
    const path = route.params.path

    const coursesContext = useContext(CoursesContext)

    const allCourseIds = coursesContext.courseIds


    const DATA = [
        {
            title: i18n.t('beginner'),
            data: allCourseIds.slice(0, 10),
        },
        {
            title: i18n.t('intermediate'),
            data: allCourseIds.slice(11, 20),
        },
        {
            title: i18n.t('advanced'),
            data: allCourseIds.slice(22, 30),
        },
    ]

    return (
        <View>
            <CAppBar title={path.name} />
            <View style={Styles.screenContainer}>
                <ListTileText
                    leading={<CImage uri={Strings.defaultCourseThubnail} width={Sizes.s68} height={Sizes.s68} />}
                    title={path.name}
                    subtitle={`${path.courseIds.length} ${i18n.t('courses')} - ${path.coursesTime} ${i18n.t('hours')}`} />
                <SizedBox height={Sizes.s12} />
                <CText>
                    {path.introduce}
                </CText>
                <CText style={styles.yourProgress}>
                    {`${i18n.t('your_progress')}: ${path.progress}%`}
                </CText>
                <CSectionList
                    sections={DATA}
                    renderItem={({ item }) => {
                        const course = coursesContext.courses.get(item)
                        return <ListCoursesItem course={course} />
                    }}
                    renderSectionHeader={({ section: { title, data } }) => (
                        <CSectionHeader
                            leadingText={title}
                            hasTrailing={false} />
                    )}
                    keyExtractor={(item, index) => item + index}>
                </CSectionList>
            </View>
        </View>
    )
}

export default PathScreen

const styles = StyleSheet.create({
    yourProgress: {
        ...TextStyles.title,
        paddingVertical: Sizes.s12,
    }
})
