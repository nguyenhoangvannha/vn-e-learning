import React from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import i18n from '../../../res/i18n'
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
import CAvatar from '../../Common/Image/c-avatar'
import ScreenContainer from '../../Common/Screen/screen-container'

const AuthorScreen = ({ route }) => {

    const author = route.params.author;

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar title={i18n.t('author')} />
            <CScrollView contentContainerStyle={{ ...Styles.screenContainer, ...styles.body }}>
                <CAvatar uri={Strings.defaultAvatar} size={Sizes.s68} />
                <CText style={{ ...TextStyles.title, ...styles.name }}>{author.name}</CText>
                <CButton title={i18n.t('follow')} style={{ width: '100%' }} />
                <CText style={{ ...TextStyles.subtitle, ...styles.description }}>
                    {author.introduce}
                </CText>
                <SizedBox height={Sizes.s32} />
                <CText style={{ ...TextStyles.subhead, alignSelf: Alignment.flexStart }}>{i18n.t('courses')}</CText>
                <SizedBox height={Sizes.s16} />
                <ListCourses
                    data={author.courseIds}
                    hasTrailing={false} />
            </CScrollView>
        </ScreenContainer>
    )
}

export default AuthorScreen

const styles = StyleSheet.create({
    body: {
        alignItems: Alignment.center,
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
