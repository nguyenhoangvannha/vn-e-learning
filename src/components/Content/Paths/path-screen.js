import React from 'react'
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
import coursesData from '../../../data/mock/courses-mock-data'
import CSectionHeader from '../../Common/Container/c-section-header'
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item'


const DATA = [
    {
        title: i18n.t('beginner'),
        data: [],
    },
    {
        title: i18n.t('intermediate'),
        data: [],
    },
    {
        title: i18n.t('advanced'),
        data: [],
    },
]

const PathScreen = ({ route }) => {
    const path = route.params.path

    return (
        <View>
            <CAppBar title={path.name} />
            <View style={Styles.screenContainer}>
                <ListTileText
                    leading={<CImage uri={Strings.defaultCourseThubnail} width={Sizes.s68} height={Sizes.s68} />}
                    title={path.name}
                    subtitle={`3 ${i18n.t('courses')} - 6 ${i18n.t('hours')}`} />
                <SizedBox height={Sizes.s12} />
                <CText>
                    A Learning Path is a selection of courses tied together for learners to progress through, mastering a particular subject or program. It allows you to enroll multiple users in multiple courses at once saving you valuable time.
                </CText>
                <CText style={styles.yourProgress}>
                    {`${i18n.t('your_progress')}: 0%`}
                </CText>
                <CSectionList
                    sections={DATA}
                    renderItem={({ item }) => <ListCoursesItem course={item} />}
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
