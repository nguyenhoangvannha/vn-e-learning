import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CourseContentItem from './CourseContentItem/course-content-item'
import Colors from '../../../res/colors'
import Sizes from '../../../res/sizes'
import CFlatList from '../../Common/Container/c-flat-list'
import courseContentData from '../../../data/mock/course-content-mock-data'
import CDivider from '../../Common/Container/c-divider'
import ContentContainer from '../../Common/Screen/content-container'

const CourseContent = () => {
    return (
        <ContentContainer style={styles.container}>
            <CFlatList
                data={courseContentData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CourseContentItem data={item} />}
                hasTrailing={false}
                ItemSeparatorComponent={() => <CDivider containerHeight={Sizes.s8}/>} />
        </ContentContainer>
    )
}

export default CourseContent

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingVertical: Sizes.s16,
    }
})
