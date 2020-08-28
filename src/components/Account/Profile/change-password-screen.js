import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Strings from '../../../res/strings'
import FlexDirection from '../../../res/styles/flex-direction'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import Styles from '../../../res/styles/styles'
import CScrollView from '../../Common/Container/c-scroll-view'
import CButton from '../../Common/Button/c-button'
import CAppBar from '../../Common/AppBar/c-app-bar'
import ProfileTile from '../../Common/Profile/profile-tile'
import Colors from '../../../res/colors'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import Routes from '../../../routes/routes'
import i18n from '../../../res/i18n'
import ScreenContainer from '../../Common/Screen/screen-container'
import { useSelector, useDispatch } from 'react-redux'
import { AuthAction } from '../../../feature/auth/actions'
import { LoadStatus, Status } from '../../../core/status'
import ErrorText from '../../Common/error/error-text'
import CFromTextInput from '../../Common/TextField/c-form-text-input'
import { DO_CHANGE_PASSWORD_USER_ACTION, DoChangePasswordUserAction } from '../../../feature/user/actions'

const ChangePasswordScreen = () => {

    const userState = useSelector(state => state.userState)

    const authState = useSelector(state => state.authState)

    const dispatch = useDispatch();

    const [user, setUser] = useState(authState.userInfo)

    const [status, setStatus] = useState(Status.idle())

    const [error, setError] = useState('')

    const [oldPassword, setOldPassword] = useState('')

    const [newPassword, setNewPassword] = useState('')

    const [retypeNewPassword, setRetypeNewPassword] = useState('')

    useEffect(
        () => {
            setStatus(userState.status[DO_CHANGE_PASSWORD_USER_ACTION])
        }, [userState]
    )

    useEffect(() => {
        if (status != undefined)
            switch (status.loadStatus) {
                case LoadStatus.error:
                    setError(status.message)
                    break;
                case LoadStatus.success:
                    dispatch(DoLogoutAuthAction())
                    RootNavigation.reset(Routes.SignIn)
                    break;
                default:
                    //setError('')
                    break;
            }
        return () => {

        }
    }, [status])



    const onTapApply = () => {
        const result = validate()
        if (result.length == 0) {
            dispatch(DoChangePasswordUserAction(user.id, oldPassword, newPassword))
        } else {
            setError(result)
        }
    }

    const validate = () => {
        var result = ''
        if (oldPassword.length < 5 || newPassword.length < 8 || retypeNewPassword.length < 8) {
            result = i18n.t('password_atless_x_char').replace('%s', '8')
        } else if (newPassword != retypeNewPassword) {
            result = i18n.t('password_not_match')
        }
        return result
    }

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar title={`${i18n.t('change_password')}`} />
            {
                user === undefined ? <View /> :
                    <CScrollView contentContainerStyle={{ ...Styles.screenContainer }}>
                        <ProfileTile
                            image={user.avatar ?? Strings.defaultAvatar}
                            title={user?.name ?? ''} />
                        <SizedBox height={Sizes.s32} />
                        <CFromTextInput
                            secureTextEntry={true}
                            label={i18n.t('old_password')}
                            placeholder={i18n.t('old_password')}
                            style={styles.input}
                            showErrorText={false}
                            error={error}
                            onChangeText={(value) => setOldPassword(value)}
                        />
                        <CFromTextInput
                            secureTextEntry={true}
                            label={i18n.t('new_password')}
                            placeholder={'new_password'}
                            style={styles.input}
                            showErrorText={false}
                            error={error}
                            onChangeText={(value) => setNewPassword(value)} />
                        <CFromTextInput
                            secureTextEntry={true}
                            label={i18n.t('retype_new_password')}
                            placeholder={'retype_new_password'}
                            style={styles.input}
                            showErrorText={false}
                            error={error}
                            onChangeText={(value) => setRetypeNewPassword(value)} />
                        <SizedBox height={'1%'} />
                        {error != undefined && error.length > 0 && <ErrorText text={error} />}
                        <SizedBox height={'25%'} />
                        <CButton
                            //disabled={username.length === 0 && phone.length === 0 && avatar.length === 0}
                            loading={status?.loadStatus == LoadStatus.loading}
                            title={i18n.t('apply')}
                            color={Colors.blue500}
                            onPress={onTapApply} />
                    </CScrollView>
            }
        </ScreenContainer>

    )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: FlexDirection.row,
        alignItems: Alignment.center,
        width: '100%'
    }
})
