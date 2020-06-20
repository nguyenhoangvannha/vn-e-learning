import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import SizedBox from '../../Common/Container/sized-box'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import Sizes from '../../../res/sizes'
import CFromTextInput from '../../Common/TextField/c-form-text-input'
import CButton from '../../Common/Button/c-button'
import Colors from '../../../res/colors'
import FlexDirection from '../../../globals/flex-direction'
import CAppBar from '../../Common/AppBar/c-app-bar'
import CScrollView from '../../Common/Container/c-scroll-view'
import i18n from '../../../res/i18n'
import CIonIcon from '../../Common/Icon/c-ion-icon'
import IconName from '../../../res/icon-name'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import Routes from '../../../routes/routes'
import ScreenContainer from '../../Common/Screen/screen-container'
import ErrorText from '../../Common/error/error-text'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const [error, setError] = useState('')

    const onCancelPressed = () => {
        RootNavigation.goBack()
    }

    const onSendEmailPressed = () => {
        if (email.length < 1) {
            setError(i18n.t('please_fill_inforamtion'))
        } else {
            RootNavigation.navigate(Routes.VerifyPasswordScreen, {
                email: email,
            })
        }
    }

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar dividerColor={Colors.transparent} />
            <CScrollView contentContainerStyle={Styles.screenContainer}>
                <SizedBox height={'25%'} />
                <View style={{ flexDirection: FlexDirection.row }}>
                    <View style={{ width: '65%' }}>
                        <CText data={i18n.t('request_to_get_your_password')} style={TextStyles.display1} />
                        <SizedBox height={Sizes.s8} />
                        <CText data={i18n.t('the_link_to_renew_password_will_be_sent_to_your_email')} style={TextStyles.caption} />
                    </View>
                    <SizedBox width={'8%'}></SizedBox>
                    <CIonIcon
                        name={IconName.mdLock} size={Sizes.s92} color={Colors.blue500} />
                </View>
                <SizedBox height={Sizes.s38} />
                <CFromTextInput
                    label={i18n.t('email')}
                    placeholder={i18n.t('enter_your_email')}
                    onChangeText={(value) => {
                        setEmail(value)
                        if (error.length > 0) {
                            setError('')
                        }
                    }}
                    error={error}/>
                <SizedBox height={Sizes.s38} />
                <CButton onPress={onSendEmailPressed} title={i18n.t('send_email')} titleStyle={TextStyles.button} />
                <SizedBox height={Sizes.s16} />
                <CButton onPress={onCancelPressed} title={i18n.t('cancel')} color={Colors.bodyText} titleStyle={TextStyles.button} />
            </CScrollView>
        </ScreenContainer>

    )
}

export default ForgotPassword

const styles = StyleSheet.create({

})
