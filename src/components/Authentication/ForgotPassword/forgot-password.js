import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Styles from '../../../globals/styles'
import SizedBox from '../../Common/Container/sized-box'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../globals/text-styles'
import Sizes from '../../../globals/sizes'
import CTextInput from '../../Common/TextField/c-text-input'
import CButton from '../../Common/Button/c-button'
import Colors from '../../../globals/colors'
import { Icon } from 'react-native-elements'
import FlexDirection from '../../../globals/flex-direction'

const ForgotPassword = () => {
    return (
        <ScrollView style={Styles.screenContainer}>
            <View>
                <SizedBox height={'25%'} />
                <View style={{flexDirection: FlexDirection.row}}>
                    <View style={{width: '65%'}}>
                        <CText data="Request to get your password" style={TextStyles.h1} />
                        <SizedBox height={Sizes.s8} />
                        <CText data="The link to renew password will be sent to your email." style={TextStyles.description} />
                    </View>
                    <SizedBox width={'8%'}></SizedBox>
                    <Icon
                        name='lock' size={Sizes.s92} color={Colors.blue500} />
                </View>
                <SizedBox height={Sizes.s38} />
                <CTextInput label='Email' placeholder='Enter your email' />
                <SizedBox height={Sizes.s38} />
                <CButton title='Send email' titleStyle={TextStyles.primaryButton} />
                <SizedBox height={Sizes.s16} />
                <CButton title='Cancle' color={Colors.bodyText} titleStyle={TextStyles.primaryButton} />
            </View>
        </ScrollView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({

})
