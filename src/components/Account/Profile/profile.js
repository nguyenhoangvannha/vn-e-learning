import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Strings from '../../../res/strings'
import FlexDirection from '../../../res/styles/flex-direction'
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
import ScreenContainer from '../../Common/Screen/screen-container'
import { useSelector, useDispatch } from 'react-redux'
import { DoLogoutAuthAction, AuthAction } from '../../../feature/auth/actions'
import { LoadStatus, Status } from '../../../core/status'
import ErrorText from '../../Common/error/error-text'
import { DateFormat } from '../../../utils/date-format'
import CIconButton from '../../Common/Button/c-icon-button'
import IconName from '../../../res/icon-name'

const Profile = () => {

    const authState = useSelector(state => state.authState)

    const dispatch = useDispatch();

    const user = authState.userInfo;

    const [logoutStatus, setLogoutstatus] = useState(Status.idle())

    const [error, setError] = useState('')

    useEffect(
        () => {
            setLogoutstatus(authState.status[AuthAction.DoLogoutAuthAction])
        }, [authState]
    )

    useEffect(() => {
        switch (logoutStatus.loadStatus) {
            case LoadStatus.error:
                setError(logoutStatus.message)
                break;
            case LoadStatus.success:
                RootNavigation.reset(Routes.SignIn)
                break;
            default:
                setError('')
                break;
        }
        return () => {

        }
    }, [logoutStatus])

    const onSignOutPressed = () => {
        dispatch(DoLogoutAuthAction())
    }

    const onPressEditBasicInfo = () => {
        RootNavigation.push(Routes.EditProfileScreen)
    }

    const onChangePasswordPressed = () => {
        RootNavigation.push(Routes.ChangePasswordScreen)
    }

    return (
        user === undefined ? <View /> :
            <ScreenContainer style={Styles.fullScreen}>
                <CAppBar title={i18n.t('profile')} />
                <CScrollView contentContainerStyle={{ ...Styles.screenContainer }}>
                    <ProfileTile
                        image={user.avatar ?? Strings.defaultAvatar}
                        title={user?.name ?? ''}
                        trailing={<CIconButton
                            icon={IconName.icConstruct}
                            size={Sizes.s32}
                            onPress={onPressEditBasicInfo}
                        />}
                    />
                    <SizedBox height={Sizes.s32} />
                    <ProfileItem title={i18n.t('email')} subtitle={user.email} />
                    <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                    <ProfileItem title={i18n.t('phone')} subtitle={user.phone} />
                    <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                    <ProfileItem title={i18n.t('created_at')} subtitle={DateFormat.toString(user.createdAt)} />
                    <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                    <ProfileItem title={i18n.t('type')} subtitle={user.type} />
                    <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                    <SizedBox height={'20%'} />
                    {error != undefined && error.length > 0 && <ErrorText text={error} />}
                    <SizedBox height={Sizes.s32} />
                    <CButton
                        //loading={logoutStatus?.loadStatus == LoadStatus.loading}
                        title={i18n.t('change_password')}
                        //color={Colors.grey200}
                        onPress={onChangePasswordPressed} />
                    <SizedBox height={Sizes.s16} />
                    <CButton
                        loading={logoutStatus?.loadStatus == LoadStatus.loading}
                        title={i18n.t('sign_out')}
                        color={Colors.grey200}
                        onPress={onSignOutPressed} />
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
