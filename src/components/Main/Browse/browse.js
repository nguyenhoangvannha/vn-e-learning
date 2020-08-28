import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, View , Text} from 'react-native'
import Styles from '../../../res/styles/styles'
import CScrollView from '../../Common/Container/c-scroll-view'
import CImageButton from '../../Common/Button/c-image-button'
import Strings from '../../../res/strings'
import Sizes from '../../../res/sizes'
import SizedBox from '../../Common/Container/sized-box'
import Routes from '../../../routes/routes'
import ListCategory from '../../Category/ListCategory/list-category'
import HomeAppBar from '../../Common/AppBar/home-app-bar'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import i18n from '../../../res/i18n'
import { AuthorsContext } from '../../../provider/authors-provider'
import { PathsContext } from '../../../provider/paths-provider'
import ScreenContainer from '../../Common/Screen/screen-container'
import { useSelector, useDispatch } from 'react-redux'
import { DO_GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION, DoGetInstructorDetail } from '../../../feature/instructor/actions'
import { Status, LoadStatus } from '../../../core/status'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'
import ListInstructorHor from '../../../components/Author/list_instructor_hor'
import { DoGetRecommendCourseCourseAction } from '../../../feature/course/actions'

const Browse = ({ }) => {

    const authState = useSelector(state => state.authState)

    const instructorState = useSelector(state => state.instructorState)

    const courseState = useSelector(state => state.courseState)

    const dispatch = useDispatch();

    const [loadInstructorStatus, setLoadInstructorStatus] = useState(Status.idle())


    useEffect(() => {

        setLoadInstructorStatus(instructorState.status[DO_GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION])

        return () => {
            //cleanup
        }
    }, [instructorState])

    const authorsContext = useContext(AuthorsContext)

    const pathsContext = useContext(PathsContext)

    const onNewReleasesPressed = () => {
        RootNavigation.navigate(Routes.NewReleasesScreen)
    }

    const onRecommendedPressed = () => {
        dispatch(DoGetRecommendCourseCourseAction(authState.userInfo.id, 1000, 1))
        RootNavigation.navigate(Routes.RecommendedForYouScreen)
    }

    const onInstructorItemPressed = (author) => {
        dispatch(DoGetInstructorDetail(author['id']))

        RootNavigation.navigate(Routes.AuthorScreen, {
            instructorId: author['id'],
        })
    }

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <HomeAppBar title={i18n.t('browse')} />
            <CScrollView style={Styles.screenContainer} >
                <CImageButton
                    uri={Strings.defaultCourseThubnail}
                    title={i18n.t('new_release').toUpperCase()}
                    height={Sizes.s64}
                    onPress={onNewReleasesPressed} />
                <SizedBox height={Sizes.s12} />
                <CImageButton
                    uri={Strings.defaultCourseThubnail}
                    title={i18n.t('recommended_for_you').toUpperCase()}
                    height={Sizes.s64}
                    onPress={onRecommendedPressed} />
                <SizedBox height={Sizes.s12} />
                <ListCategory
                    categories={Object.values(courseState.categories)} />
                <SizedBox height={Sizes.s12} />

                {
                    loadInstructorStatus.loadStatus == LoadStatus.loading ? <CLoadingIndicator />
                        : loadInstructorStatus.loadStatus == LoadStatus.success ?
                            <ListInstructorHor
                                instructors={Object.values(instructorState.instructors)}
                                onItemPressed={(item) => onInstructorItemPressed(item)}
                            />
                            : loadInstructorStatus.loadStatus == LoadStatus.error ? <Text>
                                {loadInstructorStatus.message}
                            </Text> : <View></View>
                }
            </CScrollView>
        </ScreenContainer>
    )
}

export default Browse

const styles = StyleSheet.create({

})
