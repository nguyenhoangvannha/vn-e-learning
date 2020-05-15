import React from 'react'
import { StyleSheet, Text, View, Picker } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Styles from '../../../globals/styles'
import CSwitch from '../../Common/switch/c-switch'
import ListTileText from '../../Common/Container/list-tile-text'
import CText from '../../Common/Text/c-text'
import Sizes from '../../../globals/sizes'
import CFlatList from '../../Common/Container/c-flat-list'
import CScrollView from '../../Common/Container/c-scroll-view'
import CDivider from '../../Common/Container/c-divider'
import ProfileTile from '../../Common/Profile/profile-tile'
import Strings from '../../../globals/strings'
import SizedBox from '../../Common/Container/sized-box'
import CIconButton from '../../Common/Button/c-icon-button'
import CFlatButton from '../../Common/Button/c-flat-button'
import Alignment from '../../../globals/alignment'
import CButton from '../../Common/Button/c-button'
import Colors from '../../../globals/colors'

const Settings = () => {
    return (
        <View style={Styles.fullScreen}>
            <CAppBar title='Settings' />
            <CScrollView style={Styles.screenContainer}>
                <ProfileTile
                    image={Strings.defaultAvatar}
                    title='Nha Nguyen'
                    subtitle='Mobile Developer' />
                <SizedBox height={Sizes.s16} />
                <ListTileText
                    style={styles.item}
                    title='Notifications'
                    subtitle='Show notification'
                    trailing={<CSwitch initValue={true} />} />
                <CDivider containerHeight={Sizes.s16} />
                <ListTileText
                    style={styles.item}
                    title='Dark Theme'
                    subtitle='Off'
                    trailing={<CSwitch />} />
                <CDivider containerHeight={Sizes.s16} />
                <ListTileText
                    style={styles.item}
                    title='Language'
                    subtitle='English'
                />
                <SizedBox height={Sizes.s48}/>
                <CFlatButton title='SIGN OUT' style={styles.logout}/>
            </CScrollView>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: Sizes.s12,
        paddingVertical: Sizes.s8,
    },
    logout: {
        alignSelf: Alignment.center,
        paddingHorizontal: Sizes.s18,
    }
})
