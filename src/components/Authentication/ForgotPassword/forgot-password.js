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

const ForgotPassword = ({ navigation }) => {
    const onPressedBack = () => {
        navigation.goBack();
    }
    return (
        <View style={Styles.fullScreen}>
            <CAppBar onLeadingPressed={onPressedBack} dividerColor={Colors.transparent}/>
            <CScrollView contentContainerStyle={Styles.screenContainer}>
                <SizedBox height={'25%'} />
                <View style={{ flexDirection: FlexDirection.row }}>
                    <View style={{ width: '65%' }}>
                        <CText data="Request to get your password" style={TextStyles.display1} />
                        <SizedBox height={Sizes.s8} />
                        <CText data="The link to renew password will be sent to your email." style={TextStyles.caption} />
                    </View>
                    <SizedBox width={'8%'}></SizedBox>
                    <Icon
                        name='lock' size={Sizes.s92} color={Colors.blue500} />
                </View>
                <SizedBox height={Sizes.s38} />
                <CFromTextInput label='Email' placeholder='Enter your email' />
                <SizedBox height={Sizes.s38} />
                <CButton title='Send email' titleStyle={TextStyles.button} />
                <SizedBox height={Sizes.s16} />
                <CButton title='Cancel' color={Colors.bodyText} titleStyle={TextStyles.button} onPress={onPressedBack}/>
            </CScrollView>
        </View>

    )
}

export default ForgotPassword

const styles = StyleSheet.create({

})
