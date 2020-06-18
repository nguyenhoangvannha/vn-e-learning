import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import CScrollView from '../../Common/Container/c-scroll-view'
import CImageButton from '../../Common/Button/c-image-button'
import Strings from '../../../res/strings'
import Sizes from '../../../res/sizes'
import SizedBox from '../../Common/Container/sized-box'
import PopularSkills from '../../Skills/PopularSkills/popular-skills'
import Paths from '../../Content/Paths/paths'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import Routes from '../../../routes/routes'
import ListCategory from '../../Category/ListCategory/list-category'
import HomeAppBar from '../../Common/AppBar/home-app-bar'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import i18n from '../../../res/i18n'
import { AuthorsContext } from '../../../provider/authors-provider'
import { PathsContext } from '../../../provider/paths-provider'
import ScreenContainer from '../../Common/Screen/screen-container'

const Browse = ({ }) => {

    const authorsContext = useContext(AuthorsContext)

    const pathsContext = useContext(PathsContext)

    const onNewReleasesPressed = () => {
        RootNavigation.navigate(Routes.NewReleasesScreen)
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
                    onPress={onNewReleasesPressed} />
                <SizedBox height={Sizes.s12} />

                <ListCategory />

                <PopularSkills
                    headerText={i18n.t('popular_skills')} />
                <SizedBox height={Sizes.s12} />

                <Paths
                    pathIds={Array.from(pathsContext.paths.keys())}
                    headerText={i18n.t('paths')}
                    onTrailingPress={
                        () => {
                            RootNavigation.navigate(Routes.AllPathsScreen)
                        }
                    } />
                <SizedBox height={Sizes.s28} />
                <ListAuthors
                    authorIds={Array.from(authorsContext.authors.keys())}
                    horizontal={true}
                    headerText={i18n.t('top_authors')} />
            </CScrollView>
        </ScreenContainer>
    )
}

export default Browse

const styles = StyleSheet.create({

})
