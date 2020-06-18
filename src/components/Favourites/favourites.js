import React, { useContext, useEffect } from 'react'
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

const Favourites = () => {

    const favouritesState = useContext(FavouritesContext)

    const Content = ({ data }) => {
        if (data.length == 0)
            return (
                <EmptyScreen
                    uri={IconName.mdHeart}
                    title={i18n.t('no_favourites')}
                    subtitle={i18n.t('everything_you_add_to_favourites_will_appear_here')} />
            )
        else return (
            <ListCourses
                data={data}
                hasTrailing={false} />
        )
    }

    return (
        <ContentContainer style={Styles.fullScreen}>
            <HomeAppBar title={i18n.t('favourites')} />
            <View style={Styles.body}>
                <Content data={Array.from(favouritesState.favouriteCourses)} />
            </View>
        </ContentContainer>
    )
}

export default Favourites

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: Sizes.s8,
    }
})
