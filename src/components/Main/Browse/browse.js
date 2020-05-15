import React from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../globals/styles'
import CScrollView from '../../Common/Container/c-scroll-view'
import CImageButton from '../../Common/Button/c-image-button'
import Strings from '../../../globals/strings'
import Sizes from '../../../globals/sizes'
import SizedBox from '../../Common/Container/sized-box'
import PopularSkills from '../../Skills/PopularSkills/popular-skills'
import Paths from '../../Content/Paths/paths'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import HomeAppBar from '../../Common/AppBar/home-app-bar'

const Browse = ({ navigation }) => {
    return (
        <View style={Styles.fullScreen}>
            <HomeAppBar title='Browse'/>
            <CScrollView style={Styles.screenContainer} >
                <CImageButton
                    uri={Strings.defaultCourseThubnail}
                    title='NEW RELEASE'
                    height={Sizes.s64} />
                <SizedBox height={Sizes.s12} />
                <CImageButton
                    uri={Strings.defaultCourseThubnail}
                    title='RECOMMENDED FOR YOU'
                    height={Sizes.s64} />
                <SizedBox height={Sizes.s12} />
                <PopularSkills
                    headerText='Popular Skills' />
                <SizedBox height={Sizes.s12} />

                <Paths
                    headerText='Paths' />
                <SizedBox height={Sizes.s28} />
                <ListAuthors
                    horizontal={true}
                    headerText='Top Authors' />
            </CScrollView>
        </View>
    )
}

export default Browse

const styles = StyleSheet.create({

})
