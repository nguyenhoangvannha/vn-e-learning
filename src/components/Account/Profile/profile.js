import React from 'react'
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

const Profile = () => {

    const onSignOutPressed = () => {
        RootNavigation.reset(Routes.SignIn)
    }

    return (
        <View style={Styles.fullScreen}>
            <CAppBar title='Profile' />
            <CScrollView contentContainerStyle={Styles.screenContainer}>
                <ProfileTile
                    image={Strings.defaultAvatar}
                    title='Nha Nguyen' />
                <SizedBox height={Sizes.s32} />
                <ProfileItem title='Email' subtitle='example@mail.com' />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <ProfileItem title='Phone' subtitle='+84090000922' />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <ProfileItem title='Courses' subtitle='4 Courses' />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <ProfileItem title='Total Active Date' subtitle='1 days' />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <SizedBox height={'25%'} />
                <CButton title='SIGN OUT' color={Colors.grey200} onPress={onSignOutPressed} />
            </CScrollView>
        </View>

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
