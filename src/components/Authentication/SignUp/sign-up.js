import React, { useState, useContext } from 'react'
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
import i18n from '../../../res/i18n'
import { register } from '../../../core/service/authentication-services'
import { AuthenticationContext } from '../../../provider/authentication-provider'
import ScreenContainer from '../../Common/Screen/screen-container'

const SignUp = ({ navigation }) => {

    const authContext = useContext(AuthenticationContext)

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [fullName, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const onPressedBackToSignIn = () => {
        navigation.navigate(Routes.SignIn)
    }

    const onPressedCreateAccount = () => {
        var res = register(email, username, password, fullName, phone)
        if (res.status == 200) {
            authContext.addUser(res.user)
            console.log('Users', authContext.users)
            navigation.navigate(Routes.SignIn)
        } else {
            console.log('Register error')
        }
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
                        onChangeText={(value) => setEmail(value)} />
                    <CFromTextInput
                        label={i18n.t('username')}
                        placeholder=""
                        style={styles.input}
                        onChangeText={(value) => setUsername(value)} />
                    <CFromTextInput
                        label={i18n.t('fullname')}
                        placeholder="" style={styles.input}
                        onChangeText={(value) => setFullname(value)} />
                    <CFromTextInput
                        label={i18n.t('phone')}
                        placeholder=""
                        style={styles.input}
                        onChangeText={(value) => setPhone(value)} />
                    <CFromTextInput
                        label={i18n.t('password')}
                        placeholder={i18n.t('atless_x_char').replace('%s', 6)}
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)} />
                    <CFromTextInput
                        label={i18n.t('re_type_password')}
                        placeholder={i18n.t('atless_x_char').replace('%s', 6)}
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(value) => setRePassword(value)} />
                    <SizedBox height={Sizes.s16} />
                    <CButton
                        title={i18n.t('create_account')}
                        type='outline'
                        style={styles.signUp}
                        loading={false} disabled={false}
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

