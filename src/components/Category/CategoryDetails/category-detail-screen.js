import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Styles from '../../../res/styles/styles'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import Paths from '../../Content/Paths/paths'
import CScrollView from '../../Common/Container/c-scroll-view'
import SectionCourses, { SectionCoursesByIds } from '../../Courses/SectionCourses/section-courses'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import { PathsContext } from '../../../provider/paths-provider'
import { AuthorsContext } from '../../../provider/authors-provider'
import ScreenContainer from '../../Common/Screen/screen-container'
import { DO_GET_COURSE_BY_CATEGORY_COURSE_ACTION, DoGetCourseByCategoryCourseAction } from '../../../feature/course/actions'
import { Status, LoadStatus } from '../../../core/status'
import { ActivityIndicator } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import CFlatButton from '../../Common/Button/c-flat-button'
import ListCourses from '../../Courses/ListCourses/list-courses'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'

const CategoryDetailScreen = ({ route }) => {

    const pathsContext = useContext(PathsContext)

    const authorsContext = useContext(AuthorsContext)

    const pathIds = pathsContext.pathIds

    var categoryId = route.params.categoryId

    const courseState = useSelector(state => state.courseState)

    var category = courseState.categories[categoryId].name


    const dispatch = useDispatch();

    const [loadCourseStatus, setloadCourseStatus] = useState(Status.idle())

    useEffect(() => {

        setloadCourseStatus(courseState.status[DO_GET_COURSE_BY_CATEGORY_COURSE_ACTION])

        return () => {
            //cleanup
        }
    }, [courseState])

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar title={category} />
            {
                loadCourseStatus.loadStatus == LoadStatus.loading ? <CLoadingIndicator /> :
                    <ListCourses
                        //headerText={`Courses in ${category}`}
                        style={{padding: Sizes.s12}}
                        data={courseState.coursesByCategory[categoryId]}
                    />
            }
        </ScreenContainer>
    )
}

export default CategoryDetailScreen

const styles = StyleSheet.create({})
