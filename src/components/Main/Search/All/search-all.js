import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../../res/styles/styles'
import CSectionList from '../../../Common/Container/c-section-list'
import ListCoursesItem from '../../../Courses/ListCoursesItem/list-courses-item'
import CSectionHeader from '../../../Common/Container/c-section-header'
import ProfileTile from '../../../Common/Profile/profile-tile'
import CDivider from '../../../Common/Container/c-divider'
import Sizes from '../../../../res/sizes'
import PathItemVer from '../../../Content/Paths/path-item-ver'
import i18n from '../../../../res/i18n'
import { CoursesContext } from '../../../../provider/courses-provider'
import { PathsContext } from '../../../../provider/paths-provider'
import { AuthorsContext } from '../../../../provider/authors-provider'
import ContentContainer from '../../../Common/Screen/content-container'


const SearchAll = ({ courseIds, authorIds, pathIds }) => {
    const coursesContext = useContext(CoursesContext)

    const pathsContext = useContext(PathsContext)

    const authorsContext = useContext(AuthorsContext)

    const DATA = [
        {
            title: i18n.t('courses'),
            data: courseIds ?? [],
        },
        {
            title: i18n.t('paths'),
            data: pathIds ?? [],
        },
        {
            title: i18n.t('authors'),
            data: authorIds ?? [],
        },
    ]

    const buildItem = (item) => {
        if (coursesContext.courses.has(item)) {
            return <ListCoursesItem course={coursesContext.courses.get(item)} />;
        } else if (pathsContext.paths.has(item)) {
            const path = pathsContext.paths.get(item)
            return <PathItemVer
                image={path.image}
                name={path.name}
                coursesCount={path.coursesCount} />
        } else if (authorsContext.authors.has(item)) {
            const author = authorsContext.authors.get(item)
            return <ProfileTile
                image={author.avatar}
                title={author.name}
                subtitle={`${author.coursesCount} ${i18n.t('courses')}`}
                style={styles.author} />
        } else {
            return <View />
        }
    }
    return (
        <ContentContainer style={Styles.screenContainer}>
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
        </ContentContainer>
    )
}

export default SearchAll

const styles = StyleSheet.create({
    author: {

    }
})
