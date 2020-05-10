import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from '../../../globals/styles'
import CAppBar from '../../Common/AppBar/app-bar'
import CScrollView from '../../Common/Container/c-scroll-view'
import CImageButton from '../../Common/Button/c-image-button'
import Strings from '../../../globals/strings'
import Sizes from '../../../globals/sizes'
import SizedBox from '../../Common/Container/sized-box'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import PopularSkills from '../../Skills/PopularSkills/popular-skills'
import Paths from '../../Content/Paths/paths'

const Browse = ({ style }) => {
    return (
        <View style={Styles.fullScreen}>
            <CAppBar title='Browse' hasBack={true} />
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
