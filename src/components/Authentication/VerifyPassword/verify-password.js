import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Styles from '../../../res/styles/styles'
import SizedBox from '../../Common/Container/sized-box'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import Sizes from '../../../res/sizes'
import CFromTextInput from '../../Common/TextField/c-form-text-input'
import CButton from '../../Common/Button/c-button'
import Colors from '../../../res/colors'
import { Icon } from 'react-native-elements'
import FlexDirection from '../../../globals/flex-direction'
import CAppBar from '../../Common/AppBar/c-app-bar'
import CScrollView from '../../Common/Container/c-scroll-view'
import i18n from '../../../res/i18n'

const VerifyPassword = () => {
    return (
        <View>
            <CAppBar/>
            <CScrollView>
                <View style={Styles.screenContainer}>
                    <SizedBox height={'25%'} />
                    <View style={{ flexDirection: FlexDirection.row }}>
                        <View style={{ width: '65%' }}>
                            <CText data={i18n.t('enter_your_email_code')} style={TextStyles.display1} />
                            <SizedBox height={Sizes.s8} />
                            <CText data={i18n.t('the_code_has_been_sent_to_your_email')} style={TextStyles.caption} />
                        </View>
                        <SizedBox width={'8%'}></SizedBox>
                        <Icon
                            name='lock' size={Sizes.s92} color={Colors.blue500} />
                    </View>
                    <SizedBox height={Sizes.s38} />
                    <CFromTextInput placeholder={i18n.t('enter_code')} />
                    <SizedBox height={Sizes.s38} />
                    <CButton title={i18n.t('verify')} titleStyle={TextStyles.button} />
                    <SizedBox height={Sizes.s16} />
                    <CButton title={i18n.t('cancel')} color={Colors.bodyText} titleStyle={TextStyles.button} />
                </View>
            </CScrollView>
        </View>

    )
}

export default VerifyPassword

const styles = StyleSheet.create({

})
