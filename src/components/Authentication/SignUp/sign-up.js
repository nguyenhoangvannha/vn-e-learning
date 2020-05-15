import React from 'react'
import { StyleSheet, View } from 'react-native'
import CText from '../../Common/Text/c-text'
import CTextInput from '../../Common/TextField/c-text-input'
import Colors from '../../../globals/colors'
import Alignment from '../../../globals/alignment'
import Sizes from '../../../globals/sizes'
import CButton from '../../Common/Button/c-button'
import SizedBox from '../../Common/Container/sized-box'
import FontWeight from '../../../globals/font-weight'
import Styles from '../../../globals/styles'
import CScrollView from '../../Common/Container/c-scroll-view'
import Routes from '../../../routes/routes'

const SignUp = ({ navigation }) => {
    const onPressedBackToSignIn = () => {
        navigation.navigate(Routes.SignIn)
    }

    const onPressedCreateAccount = () => {
        navigation.navigate(Routes.Main)
    }

    return (
        <CScrollView style={Styles.screenContainer}>
            <View style={Styles.screenColumn}>
                <SizedBox height={Sizes.s32} />
                <CText data="Sign Up" style={styles.label} />
                <SizedBox height={Sizes.s32} />
                <CTextInput label="Email" placeholder="Example: your@mail" style={styles.input} />
                <CTextInput label="First name" placeholder="" style={styles.input} />
                <CTextInput label="Last name" placeholder="" style={styles.input} />
                <CTextInput label="Phone" placeholder="" style={styles.input} />
                <CTextInput label="Password" placeholder="Atless 6 char" style={styles.input} secureTextEntry={true} />
                <CTextInput label="Re-typePassword" placeholder="Atless 6 char" style={styles.input} secureTextEntry={true} />
                <SizedBox height={Sizes.s16} />
                <CButton title="CREATE ACCOUNT" type='outline' style={styles.signUp} loading={false} disabled={false} />
                <SizedBox height={Sizes.s24} />
                <CButton title="BACK TO LOGIN" onPress={onPressedBackToSignIn} type='clear' color={Colors.transparent} style={styles.forgotPassword} loading={false} disabled={false} />
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

