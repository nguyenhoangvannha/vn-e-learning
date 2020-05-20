import React from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import CAppBar from '../../Common/AppBar/c-app-bar'
import CIonIcon from '../../Common/Icon/c-ion-icon'
import IconName from '../../../res/icon-name'
import Sizes from '../../../res/sizes'
import CScrollView from '../../Common/Container/c-scroll-view'
import CFormTextInput from '../../Common/TextField/c-form-text-input'
import SizedBox from '../../Common/Container/sized-box'
import CButton from '../../Common/Button/c-button'

const SendFeedbackScreen = () => {
    return (
        <View style={Styles.fullScreen}>
            <CAppBar
                title='Send Feedback'
                trailing={<CIonIcon name={IconName.mdSend} paddingHorizontal={Sizes.s0} />} />
            <CScrollView contentContainerStyle={Styles.screenContainer}>
                <SizedBox height={'15%'} />
                <CFormTextInput
                    placeholder='Your email address' />
                <SizedBox height={Sizes.s16} />
                <CFormTextInput
                    placeholder='Your feedback' />
                <SizedBox height={'25%'} />
                <CButton title='Send Feedback' />
            </CScrollView>
        </View>
    )
}

export default SendFeedbackScreen

const styles = StyleSheet.create({})
