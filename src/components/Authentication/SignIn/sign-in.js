import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import CText from '../../Common/Text/c-text'
import CFromTextInput from '../../Common/TextField/c-form-text-input'
import Colors from '../../../res/colors'
import Alignment from '../../../res/styles/alignment'
import Sizes from '../../../res/sizes'
import CButton from '../../Common/Button/c-button'
import SizedBox from '../../Common/Container/sized-box'
import FontWeight from '../../../res/styles/font-weight'
import Styles from '../../../res/styles/styles'
import CScrollView from '../../Common/Container/c-scroll-view'
import Routes from '../../../routes/routes'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import i18n from '../../../res/i18n'
import ScreenContainer from '../../Common/Screen/screen-container'
import ErrorText from '../../Common/error/error-text'
import { useSelector, useDispatch, ConnectedComponent } from 'react-redux'
import { DoLoginAuthAction, AuthAction, SetStatusAuthAction } from '../../../feature/auth/actions'
import { LoadStatus, Status } from '../../../core/status'


const SignIn = (props) => {


    const [username, setUsername] = useState('nguyenhoangvannha@gmail.com');

    const [password, setPassword] = useState('nha.nguyen');

    const [error, setError] = useState('')

    const authState = useSelector(state => state.authState)

    const dispatch = useDispatch();

    const [loginStatus, setLoginStatus] = useState(Status.idle())

    useEffect(() => {
        setLoginStatus(authState.status[AuthAction.DoLoginAuthAction]);
    }, [authState])

    useEffect(() => {
        switch (loginStatus.loadStatus) {
            case LoadStatus.loading:
                break;
            case LoadStatus.error:
                setError(i18n.t('wrong_username_password_or_account_not_active'))
                break;
            case LoadStatus.success:
                RootNavigation.replace(Routes.Main);
                dispatch(SetStatusAuthAction(AuthAction.DoLogoutAuthAction, Status.idle()))
                break;
            default:
        }
        return () => {

        }
    }, [loginStatus])


    const onPressedSignIn = () => {
        if (username.length === 0 || password.length === 0) {
            setError(i18n.t('please_fill_inforamtion'))
        } if (password.length < 8) {
            setError(i18n.t('password_atless_x_char').replace('%s', '8'))
        } else {
            dispatch(DoLoginAuthAction(username, password))
        }
    }
    const onPressedSignUp = () => {
        RootNavigation.navigate(Routes.SignUp);
    }
    const onPressedForgotPassword = () => {
        RootNavigation.navigate(Routes.ForgotPassword);
    }

    return (
        <ScreenContainer>
            <CScrollView contentContainerStyle={Styles.screenContainer} >
                <View style={Styles.screenColumn}>
                    <SizedBox height={'25%'} />
                    <CText data={i18n.t('sign_in')} style={styles.label} />
                    <SizedBox height={Sizes.s70} />

                    <CFromTextInput
                        initValue={'nguyenhoangvannha@gmail.com'}
                        label={i18n.t('email')}
                        placeholder={i18n.t('your_email_address')}
                        style={styles.input}
                        onChangeText={(value) => {
                            if (error.length > 0) {
                                setError('')
                            }
                            setUsername(value)
                        }}
                        showErrorText={false}
                        error={error}>
                       
                    </CFromTextInput>

                    <CFromTextInput
                        initValue={'nha.nguyen'}
                        label={i18n.t('password')}
                        placeholder={i18n.t('atless_x_char').replace('%s', 6)}
                        style={styles.input} 
                        secureTextEntry={true}
                        onChangeText={(value) => {
                            if (error.length > 0) {
                                setError('')
                            }
                            setPassword(value)
                        }}
                        showErrorText={false}
                        error={error}>
                    </CFromTextInput>

                    {error.length > 0 && <ErrorText>{error}</ErrorText>}
                    <SizedBox height={Sizes.s16} />

                    <CButton
                        title={i18n.t('sign_in').toUpperCase()}
                        onPress={onPressedSignIn}
                        type='solid'
                        style={styles.signIn}
                        loading={loginStatus.loadStatus === LoadStatus.loading}
                        disabled={false} />
                    <SizedBox height={Sizes.s12} />
                    <CButton title={i18n.t('sign_up').toUpperCase()} onPress={onPressedSignUp} type='outline' style={styles.signUp} loading={false} disabled={false} />
                    <SizedBox height={Sizes.s24} />
                    <CButton title={i18n.t('forgot_password').toUpperCase()} onPress={onPressedForgotPassword} type='clear' style={styles.forgotPassword} loading={false} disabled={false} color={Colors.transparent} />
                </View>
            </CScrollView>
        </ScreenContainer>
    )
}

export default SignIn

const styles = StyleSheet.create({
    label: {
        alignSelf: Alignment.center,
        fontSize: Sizes.s34,
        fontWeight: FontWeight.bold,
    },
    input: {
    },
    signIn: {
        backgroundColor: Colors.green,
    },
    signUp: {

    },
    forgotPassword: {

    },
})
