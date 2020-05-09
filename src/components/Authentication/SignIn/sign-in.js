import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
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

const SignIn = () => {
    return (
        <CScrollView style={Styles.screenContainer} >
            <View style={Styles.screenColumn}>
                <SizedBox height={'25%'} />
                <CText data="Sign In" style={styles.label} />
                <SizedBox height={Sizes.s70} />
                <CTextInput label="Username" placeholder="Your username" style={styles.input} />
                <CTextInput label="Password" placeholder="Atless 6 char" style={styles.input} secureTextEntry={true} />
                <SizedBox height={Sizes.s16} />
                <CButton title="SIGN IN" type='solid' style={styles.signIn} loading={false} disabled={false} />
                <SizedBox height={Sizes.s12} />
                <CButton title="SIGN UP" type='outline' style={styles.signUp} loading={false} disabled={false} />
                <SizedBox height={Sizes.s24} />
                <CButton title="FORGOT PASSWORD?" type='clear' style={styles.forgotPassword} loading={false} disabled={false} />
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
