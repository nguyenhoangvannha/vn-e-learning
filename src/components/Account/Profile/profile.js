import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CAvatar from '../../Common/Image/c-avatar'
import Strings from '../../../globals/strings'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../globals/text-styles'
import FlexDirection from '../../../globals/flex-direction'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../globals/sizes'
import Alignment from '../../../globals/alignment'
import Styles from '../../../globals/styles'
import CDivider from '../../Common/Container/c-divider'
import CScrollView from '../../Common/Container/c-scroll-view'
import CButton from '../../Common/Button/c-button'
import CAppBar from '../../Common/AppBar/app-bar'
import ListTile from '../../Common/Container/list-tile'

const Profile = () => {
    return (
        <View style={Styles.fullScreen}>
            <CAppBar title='Profile' />
            <CScrollView style={Styles.screenContainer}>
                <View style={styles.header}>
                    <CAvatar uri={Strings.defaultAvatar} size='medium' />
                    <SizedBox width={Sizes.s16} />
                    <CText data='Nha Nguyen' style={TextStyles.primaryButton} />
                </View>
                <SizedBox height={Sizes.s32} />
                <ListTile title='Email' subtitle='example@mail.com' />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <ListTile title='Phone' subtitle='+84090000922' />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <ListTile title='Courses' subtitle='4 Courses' />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <ListTile title='Total Active Date' subtitle='1 days s' />
                <CDivider marginVertical={Sizes.s8} marginHorizontal={Sizes.s4} />
                <SizedBox height={'25%'} />
                <CButton title='SIGN OUT' />
            </CScrollView>
        </View>

    )
}

export default Profile

const styles = StyleSheet.create({
    header: {
        flexDirection: FlexDirection.row,
        alignItems: Alignment.center,
        width: '100%'
    }
})
