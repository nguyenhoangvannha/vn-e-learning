import React from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../../res/styles/styles'
import coursesData from '../../../../data/mock/courses-mock-data'
import CSectionList from '../../../Common/Container/c-section-list'
import ListCoursesItem from '../../../Courses/ListCoursesItem/list-courses-item'
import CSectionHeader from '../../../Common/Container/c-section-header'
import authorsData from '../../../../data/mock/authos-mock-data'
import pathsData from '../../../../data/mock/paths-mock-data'
import CourseModel from '../../../../data/models/course/course-model'
import PathModel from '../../../../data/models/paths/path'
import AuthorModel from '../../../../data/models/author/author-model'
import ProfileTile from '../../../Common/Profile/profile-tile'
import CDivider from '../../../Common/Container/c-divider'
import Sizes from '../../../../res/sizes'
import PathItemVer from '../../../Content/Paths/path-item-ver'
import i18n from '../../../../res/i18n'

const courses = []

const authors = authorsData.splice(0, 4)

const paths = pathsData.splice(0, 4)

const DATA = [
    {
        title: i18n.t('courses'),
        data: courses,
    },
    {
        title: i18n.t('paths'),
        data: paths,
    },
    {
        title: i18n.t('authors'),
        data: authors,
    },
]

const buildItem = (item) => {
    if (item instanceof CourseModel) {
        return <ListCoursesItem course={item} />;
    } else if (item instanceof PathModel) {
        return <PathItemVer
            image={item.image}
            name={item.name}
            coursesCount={item.coursesCount} />
    } else if (item instanceof AuthorModel) {
        return <ProfileTile
            image={item.avatar}
            title={item.name}
            subtitle={`${item.coursesCount} ${i18n.t('courses')}`}
            style={styles.author} />
    } else {
        return <View />
    }
}

const SearchAll = () => {
    return (
        <View style={Styles.screenContainer}>
            <CSectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => buildItem(item)}
                renderSectionHeader={({ section: { title, data } }) => (
                    <CSectionHeader
                        leadingText={title}
                        trailingText={`${data.length} ${i18n.t('results')}`} />
                )}
                ItemSeparatorComponent={() => <CDivider containerHeight={Sizes.s16} />}
            />
        </View>
    )
}

export default SearchAll

const styles = StyleSheet.create({
    author: {

    }
})
