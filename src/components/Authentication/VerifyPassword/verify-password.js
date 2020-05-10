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
import CAppBar from '../../Common/AppBar/app-bar'
import CScrollView from '../../Common/Container/c-scroll-view'

const VerifyPassword = () => {
    return (
        <View>
            <CAppBar/>
            <CScrollView>
                <View style={Styles.screenContainer}>
                    <SizedBox height={'25%'} />
                    <View style={{ flexDirection: FlexDirection.row }}>
                        <View style={{ width: '65%' }}>
                            <CText data="Enter your email code" style={TextStyles.display1} />
                            <SizedBox height={Sizes.s8} />
                            <CText data="The code has been sent to your email." style={TextStyles.caption} />
                        </View>
                        <SizedBox width={'8%'}></SizedBox>
                        <Icon
                            name='lock' size={Sizes.s92} color={Colors.blue500} />
                    </View>
                    <SizedBox height={Sizes.s38} />
                    <CTextInput placeholder='Enter code' />
                    <SizedBox height={Sizes.s38} />
                    <CButton title='Verify' titleStyle={TextStyles.button} />
                    <SizedBox height={Sizes.s16} />
                    <CButton title='Cancel' color={Colors.bodyText} titleStyle={TextStyles.button} />
                </View>
            </CScrollView>
        </View>

    )
}

export default VerifyPassword

const styles = StyleSheet.create({

})
