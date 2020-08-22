import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import EmptyScreen from '../Common/Screen/empty-screen'
import IconName from '../../res/icon-name'
import i18n from '../../res/i18n'
import ListCourses from '../Courses/ListCourses/list-courses'
import HomeAppBar from '../Common/AppBar/home-app-bar'
import Sizes from '../../res/sizes'
import Styles from '../../res/styles/styles'
import { FavouritesContext } from '../../provider/favourites-provider'
import ContentContainer from '../Common/Screen/content-container'
import { useSelector, useDispatch } from 'react-redux'
import { Status, LoadStatus } from '../../core/status'
import { DO_GET_FAVOURITES_COURSE_ACTION, DoGetFavouritesCourseAction } from '../../feature/course/actions'
import { ActivityIndicator } from 'react-native-paper'
import CLoadingIndicator from '../Common/Animations/c_loading_indicator'
import CFlatButton from '../Common/Button/c-flat-button'
import { FavouriteCourseList } from '../Courses/ListCoursesItem/favourite_course_item'

const Favourites = () => {

    const courseState = useSelector(state => state.courseState)

    const dispatch = useDispatch();

    const [getFavouriteStatus, setGetFavouriteStatus] = useState(Status.idle())

    useEffect(() => {

        setGetFavouriteStatus(courseState.status[DO_GET_FAVOURITES_COURSE_ACTION])

        return () => {
            //cleanup
        }
    }, [courseState])


    return (
        <ContentContainer style={Styles.fullScreen}>
            <HomeAppBar title={i18n.t('favourites')} />
            <View style={Styles.body}>
                {/* <CFlatButton
                    title='BUTTON'
                    onPress={() => {
                        console.log('DEBUG FAV', courseState.favouriteCourses)
                    }}
                /> */}
                {
                    getFavouriteStatus.loadStatus == LoadStatus.loading
                        ? <CLoadingIndicator /> : <Content data={Array.from(courseState.favouriteCourses)} />
                }
            </View>
        </ContentContainer>
    )
}


const Content = ({ data }) => {
    if (data.length == 0)
        return (
            <EmptyScreen
                uri={IconName.mdHeart}
                title={i18n.t('no_favourites')}
                subtitle={i18n.t('everything_you_add_to_favourites_will_appear_here')} />
        )
    else return (
        <FavouriteCourseList
            courses={data}
        />
    )
}

export default Favourites

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: Sizes.s8,
    }
})
