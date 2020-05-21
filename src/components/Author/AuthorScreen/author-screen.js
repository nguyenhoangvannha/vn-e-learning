import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import i18n from '../../../res/i18n'
import CImage from '../../Common/Image/c-image'
import Strings from '../../../res/strings'
import Sizes from '../../../res/sizes'
import Styles from '../../../res/styles/styles'
import Alignment from '../../../res/styles/alignment'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import FontWeight from '../../../globals/font-weight'
import CButton from '../../Common/Button/c-button'
import SizedBox from '../../Common/Container/sized-box'
import ListCourses from '../../Courses/ListCourses/list-courses'
import CScrollView from '../../Common/Container/c-scroll-view'

const AuthorScreen = ({ route }) => {

    const author = route.params.author;

    return (
        <View style={Styles.fullScreen}>
            <CAppBar title={i18n.t('author')} />
            <CScrollView contentContainerStyle={{ ...Styles.screenContainer, ...styles.body }}>
                <CImage uri={Strings.defaultAvatar} style={styles.avatar} />
                <CText style={{ ...TextStyles.title, ...styles.name }}>{author.name}</CText>
                <CButton title={i18n.t('follow')} style={{width: '100%'}}/>
                <CText style={{...TextStyles.subtitle, ...styles.description}}>
                    I started with Airbnb accommodation that was rented 3 years ago. Today I have several and each of them is the best rental option in its city. It means that when a traveler searches Airbnb in my city, my apartment is most likely to be rented before all the others (if available). Basically, I generate the maximum amount of income that can be made with Airbnb in my city for my type of accommodation.
                </CText>
                <SizedBox height={Sizes.s32}/>
                <CText style={{...TextStyles.subhead , alignSelf: Alignment.flexStart}}>{i18n.t('courses')}</CText>
                <SizedBox height={Sizes.s16}/>
                <ListCourses hasTrailing={false}/>
            </CScrollView>
        </View>
    )
}

export default AuthorScreen

const styles = StyleSheet.create({
    body: {
        alignItems: Alignment.center,
    },
    avatar: {
        width: Sizes.s68,
        height: Sizes.s68,
        borderRadius: Sizes.s34,
    },
    name: {
        fontWeight: FontWeight.bold,
        paddingTop: Sizes.s8,
        paddingBottom: Sizes.s8,
    },
    description: {
        paddingTop: Sizes.s12,
    }
})
