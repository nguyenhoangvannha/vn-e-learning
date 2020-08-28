import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import EmptyScreen from '../Common/Screen/empty-screen'
import IconName from '../../res/icon-name'
import i18n from '../../res/i18n'
import Sizes from '../../res/sizes'
import Styles from '../../res/styles/styles'
import { useSelector, useDispatch } from 'react-redux'
import { Status, LoadStatus } from '../../core/status'
import { DO_GET_FAVOURITES_COURSE_ACTION, DoGetFavouritesCourseAction } from '../../feature/course/actions'
import CLoadingIndicator from '../Common/Animations/c_loading_indicator'
import { FavouriteCourseList } from '../Courses/ListCoursesItem/favourite_course_item'
import Colors from '../../res/colors'
import ScreenContainer from '../Common/Screen/screen-container'

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
        <ScreenContainer style={{paddingHorizontal: Sizes.s8, paddingVertical: Sizes.s16}}
        //style={{ backgroundColor: Colors.white, height: '100%' , paddingHorizontal: Sizes.s8, paddingVertical: Sizes.s16}}
        >
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
        </ScreenContainer>
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
