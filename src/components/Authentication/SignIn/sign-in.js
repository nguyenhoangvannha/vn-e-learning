import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import CText from '../../Common/Text/c-text'
import CFromTextInput from '../../Common/TextField/c-form-text-input'
import Colors from '../../../res/colors'
import Alignment from '../../../res/styles/alignment'
import Sizes from '../../../res/sizes'
import CButton from '../../Common/Button/c-button'
import SizedBox from '../../Common/Container/sized-box'
import FontWeight from '../../../globals/font-weight'
import Styles from '../../../res/styles/styles'
import CScrollView from '../../Common/Container/c-scroll-view'
import Routes from '../../../routes/routes'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import i18n from '../../../res/i18n'
import { AuthenticationContext } from '../../../provider/authentication-provider'
import { login } from '../../../core/service/authentication-services'

const SignIn = (props) => {
    const authState = useContext(AuthenticationContext)

    const [username, setUsername] = useState('admin');

    const [password, setPassword] = useState('123456');
    
    useEffect(() => {
        var status = authState.authentication.status;
        if (status != undefined && status === 200) {
            RootNavigation.replace(Routes.Main);
        }
    }, [authState])

    const onPressedSignIn = () => {
        authState.setAuthentication(login(username, password));
    }
    const onPressedSignUp = () => {
       RootNavigation.navigate(Routes.SignUp);
    }
    const onPressedForgotPassword = () => {
        RootNavigation.navigate(Routes.ForgotPassword);
    }


    return (
        <CScrollView contentContainerStyle={Styles.screenContainer} >
            <View style={Styles.screenColumn}>
                <SizedBox height={'25%'} />
                <CText data={i18n.t('sign_in')} style={styles.label} />
                <SizedBox height={Sizes.s70} />

                <CFromTextInput
                    label={i18n.t('username')}
                    placeholder={i18n.t('your_username')}
                    style={styles.input}
                    onChangeText={(value) => setUsername(value)}>
                    {username}
                </CFromTextInput>

                <CFromTextInput
                    label={i18n.t('password')}
                    placeholder={i18n.t('atless_x_char').replace('%s', 6)}
                    style={styles.input} secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}>
                    {password}
                </CFromTextInput>

                <SizedBox height={Sizes.s16} />
                <CButton title={i18n.t('sign_in').toUpperCase()} onPress={onPressedSignIn} type='solid' style={styles.signIn} loading={false} disabled={false} />
                <SizedBox height={Sizes.s12} />
                <CButton title={i18n.t('sign_up').toUpperCase()} onPress={onPressedSignUp} type='outline' style={styles.signUp} loading={false} disabled={false} />
                <SizedBox height={Sizes.s24} />
                <CButton title={i18n.t('forgot_password').toUpperCase()} onPress={onPressedForgotPassword} type='clear' style={styles.forgotPassword} loading={false} disabled={false} color={Colors.transparent} />
            </View>
        </CScrollView>
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
