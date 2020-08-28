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
import { AuthAction } from '../../../feature/auth/actions'
import { LoadStatus, Status } from '../../../core/status'
import ErrorText from '../../Common/error/error-text'
import CFromTextInput from '../../Common/TextField/c-form-text-input'
import { DoUpdateBasicProfileUserAction, DO_UPDATE_BASIC_PROFILE_USER_ACTION } from '../../../feature/user/actions'

const EditProfileScreen = () => {

    const userState = useSelector(state => state.userState)

    const authState = useSelector(state => state.authState)

    const dispatch = useDispatch();

    const [user, setUser] = useState(authState.userInfo)

    const [status, setStatus] = useState(Status.idle())

    const [error, setError] = useState('')

    const [username, setUsername] = useState(user.name)

    const [avatar, setAvatar] = useState(user.avatar)

    const [phone, setPhone] = useState(user.phone)

    useEffect(
        () => {
            setUser(authState.userInfo)
        }, [authState]
    )

    useEffect(
        () => {
            setStatus(userState.status[DO_UPDATE_BASIC_PROFILE_USER_ACTION])
        }, [userState]
    )

    useEffect(() => {
        switch (status.loadStatus) {
            case LoadStatus.error:
                setError(status.message)
                break;
            case LoadStatus.success:
                RootNavigation.goBack()
                break;
            default:
                setError('')
                break;
        }
        return () => {

        }
    }, [status])



    const onTapApply = () => {
        const result = validate()
        if (result.length == 0) {
            const newName = username?.length != 0 ? username : user.name;
            const newPhone = phone?.length != 0 ? phone : user.phone;
            const newAvatar = avatar?.length != 0 ? avatar : user.avatar;
            dispatch(DoUpdateBasicProfileUserAction(newName, newPhone, newAvatar))
        } else {
            setError(result)
        }
    }

    const validate = () => {
        var result = ''
        if (username.length < 6) {
            result = i18n.t('username_6_char')
        } else
            if (phone.length < 9) {
                result = i18n.t('phone_9_char')
            } else
                if (!avatar.includes('http')) {
                    result = i18n.t('invalid_url')
                }
        return result
    }

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar title={`${i18n.t('edit_profile')}`} />
            {
                user === undefined ? <View /> :
                    <CScrollView contentContainerStyle={{ ...Styles.screenContainer }}>
                        <ProfileTile
                            image={user.avatar ?? Strings.defaultAvatar}
                            title={user?.name ?? ''} />
                        <SizedBox height={Sizes.s32} />
                        <CFromTextInput
                            initValue={user.name}
                            label={i18n.t('username')}
                            placeholder={user.name ?? i18n.t('not_set_yet')}
                            style={styles.input}
                            showErrorText={false}
                            error={error}
                            onChangeText={(value) => setUsername(value)}
                        />
                        <CFromTextInput
                            initValue={user.phone}
                            label={i18n.t('phone')}
                            placeholder={user.phone ?? ''}
                            style={styles.input}
                            showErrorText={false}
                            error={error}
                            onChangeText={(value) => setPhone(value)} />
                        <CFromTextInput
                            initValue={user.avatar}
                            label={i18n.t('avatar')}
                            placeholder={user.avatar ?? ''}
                            style={styles.input}
                            showErrorText={false}
                            error={error}
                            onChangeText={(value) => setAvatar(value)} />
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

export default EditProfileScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: FlexDirection.row,
        alignItems: Alignment.center,
        width: '100%'
    }
})
