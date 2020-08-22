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
import i18n from '../../../res/i18n'
import ScreenContainer from '../../Common/Screen/screen-container'
import ErrorText from '../../Common/error/error-text'
import { useSelector, useDispatch } from 'react-redux'
import { Status, LoadStatus } from '../../../core/status'
import { DO_REGISTER_AUTH_ACTION, DoRegisterAuthAction } from '../../../feature/auth/actions'

const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [error, setError] = useState('')
    const [status, setStatus] = useState(Status.idle())


    const authState = useSelector(state => state.authState)

    const dispatch = useDispatch();



    useEffect(() => {

        setStatus(authState.status[DO_REGISTER_AUTH_ACTION])

        switch (status.loadStatus) {
            case LoadStatus.error:
                setError(status.message)
                break;
            case LoadStatus.success:
                navigation.navigate(Routes.SignIn)
                break;
            default:
                break;
        }

        return () => {
            //cleanup
        }
    }, [authState])

    const onPressedBackToSignIn = () => {
        navigation.navigate(Routes.SignIn)
    }

    const onPressedCreateAccount = () => {
        if (validate()) {
            setError('')
            dispatch(DoRegisterAuthAction(email, username, phone, password))
        }
    }

    const validate = () => {
        if(!email.includes('@')){
            setError(i18n.t('wrong_email'))
            return false;
        }
        if (email.length == 0 || username.length == 0 || phone == 0) {
            setError(i18n.t('please_fill_inforamtion'))
            return false;
        }
        if(password.length < 6 || rePassword.length < 6){
            setError(i18n.t('password_atless_x_char').replace('%s', '6'))
            return false;
        }
        if (password != rePassword) {
            setError(i18n.t('password_not_match'))
            return false;
        }
        return true;
    }

    return (
        <ScreenContainer>
            <CScrollView contentContainerStyle={Styles.screenContainer}>
                <View style={Styles.screenColumn}>
                    <SizedBox height={Sizes.s32} />
                    <CText data={i18n.t('sign_up')} style={styles.label} />
                    <SizedBox height={Sizes.s32} />
                    <CFromTextInput
                        label={i18n.t('email')}
                        placeholder="Example: your@mail"
                        style={styles.input}
                        showErrorText={false}
                        error={error}
                        onChangeText={(value) => setEmail(value)} />
                    <CFromTextInput
                        label={i18n.t('username')}
                        placeholder=""
                        style={styles.input}
                        showErrorText={false}
                        error={error}
                        onChangeText={(value) => setUsername(value)} />
                    <CFromTextInput
                        label={i18n.t('phone')}
                        placeholder=""
                        style={styles.input}
                        showErrorText={false}
                        error={error}
                        onChangeText={(value) => setPhone(value)} />
                    <CFromTextInput
                        label={i18n.t('password')}
                        placeholder={i18n.t('atless_x_char').replace('%s', 6)}
                        style={styles.input}
                        secureTextEntry={true}
                        showErrorText={false}
                        error={error}
                        onChangeText={(value) => setPassword(value)} />
                    <CFromTextInput
                        label={i18n.t('re_type_password')}
                        placeholder={i18n.t('atless_x_char').replace('%s', 6)}
                        style={styles.input}
                        secureTextEntry={true}
                        showErrorText={false}
                        error={error}
                        onChangeText={(value) => setRePassword(value)} />
                    {error.length > 0 && <ErrorText>{error}</ErrorText>}
                    <SizedBox height={Sizes.s16} />
                    <CButton
                        title={i18n.t('create_account')}
                        type='outline'
                        style={styles.signUp}
                        loading={(status?.loadStatus ?? LoadStatus.idle) == LoadStatus.loading}
                        disabled={false}
                        onPress={onPressedCreateAccount} />
                    <SizedBox height={Sizes.s24} />
                    <CButton title={i18n.t('back_to_login')} onPress={onPressedBackToSignIn} type='clear' color={Colors.transparent} style={styles.forgotPassword} loading={false} disabled={false} />
                </View>
            </CScrollView>
        </ScreenContainer>
    )
}

export default SignUp

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

