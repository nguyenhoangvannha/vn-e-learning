import React, { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Strings from '../../../res/strings'
import FlexDirection from '../../../globals/flex-direction'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import Styles from '../../../res/styles/styles'
import CDivider from '../../Common/Container/c-divider'
import CScrollView from '../../Common/Container/c-scroll-view'
import CButton from '../../Common/Button/c-button'
import CAppBar from '../../Common/AppBar/c-app-bar'
import ProfileItem from './profile-item'
import ProfileTile from '../../Common/Profile/profile-tile'
import Colors from '../../../res/colors'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import Routes from '../../../routes/routes'
import i18n from '../../../res/i18n'
import { AuthenticationContext } from '../../../provider/authentication-provider'
import { ThemeContext } from '../../../provider/theme-provider'
import ScreenContainer from '../../Common/Screen/screen-container'

const Profile = () => {

    const authContext = useContext(AuthenticationContext)

    const themeContext = useContext(ThemeContext)

    const user = authContext.user;

    const theme = themeContext.theme

    console.log(user)

    useEffect(
        () => {
            if (authContext.authentication.status === undefined) {
                RootNavigation.reset(Routes.SignIn)
            }
        }
    )

    const onSignOutPressed = () => {
        authContext.setAuthentication({ status: undefined })
    }

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar title={i18n.t('profile')} />
            <CScrollView contentContainerStyle={{ ...Styles.screenContainer }}>
                <ProfileTile
                    image={Strings.defaultAvatar}
                    title={user?.fullName ?? ''} />
                <SizedBox height={Sizes.s32} />
                <ProfileItem title={i18n.t('email')} subtitle={user.email} />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <ProfileItem title={i18n.t('phone')} subtitle={user.phone} />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <ProfileItem title={i18n.t('courses')} subtitle={`4 ${i18n.t('courses')}`} />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <ProfileItem title={i18n.t('total_active_date')} subtitle={`1 ${i18n.t('days')}`} />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <SizedBox height={'25%'} />
                <CButton title={i18n.t('sign_out')} color={Colors.grey200} onPress={onSignOutPressed} />
            </CScrollView>
        </ScreenContainer>

    )
}

export default Profile

const styles = StyleSheet.create({
    header: {
        flexDirection: FlexDirection.row,
        alignItems: Alignment.center,
        width: '100%'
    }
})
