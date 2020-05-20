import React from 'react'
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

const SignUp = ({ navigation }) => {
    const onPressedBackToSignIn = () => {
        navigation.navigate(Routes.SignIn)
    }

    const onPressedCreateAccount = () => {
        navigation.navigate(Routes.Main)
    }

    return (
        <CScrollView contentContainerStyle={Styles.screenContainer}>
            <View style={Styles.screenColumn}>
                <SizedBox height={Sizes.s32} />
                <CText data={i18n.t('sign_up')} style={styles.label} />
                <SizedBox height={Sizes.s32} />
                <CFromTextInput label={i18n.t('email')} placeholder="Example: your@mail" style={styles.input} />
                <CFromTextInput label={i18n.t('first_name')} placeholder="" style={styles.input} />
                <CFromTextInput label={i18n.t('last_name')} placeholder="" style={styles.input} />
                <CFromTextInput label={i18n.t('phone')} placeholder="" style={styles.input} />
                <CFromTextInput label={i18n.t('password')} placeholder={i18n.t('atless_x_char').replace('%s', 6)} style={styles.input} secureTextEntry={true} />
                <CFromTextInput label={i18n.t('re_type_password')} placeholder={i18n.t('atless_x_char').replace('%s', 6)} style={styles.input} secureTextEntry={true} />
                <SizedBox height={Sizes.s16} />
                <CButton title={i18n.t('create_account')} type='outline' style={styles.signUp} loading={false} disabled={false} />
                <SizedBox height={Sizes.s24} />
                <CButton title={i18n.t('back_to_login')} onPress={onPressedBackToSignIn} type='clear' color={Colors.transparent} style={styles.forgotPassword} loading={false} disabled={false} />
            </View>
        </CScrollView>
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

