import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Styles from '../../../res/styles/styles'
import CSwitch from '../../Common/switch/c-switch'
import ListTileText from '../../Common/Container/list-tile-text'
import Sizes from '../../../res/sizes'
import CScrollView from '../../Common/Container/c-scroll-view'
import CDivider from '../../Common/Container/c-divider'
import ProfileTile from '../../Common/Profile/profile-tile'
import Strings from '../../../res/strings'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../res/styles/alignment'
import i18n from '../../../res/i18n'
import { AuthenticationContext } from '../../../provider/authentication-provider'
import { ThemeContext, themes } from '../../../provider/theme-provider'

const Settings = () => {

    const authContext = useContext(AuthenticationContext)

    const themeContext = useContext(ThemeContext)

    const user = authContext.user

    const isDarkTheme = themeContext.theme === themes.dark;

    const changeTheme = (useDarkTheme) => {
        console.log('changeTheme', useDarkTheme)
        themeContext.setTheme(useDarkTheme ? themes.dark : themes.light)
    }

    return (
        <View style={{ backgroundColor: themeContext.theme.background }}>
            <CAppBar title={i18n.t('settings')} />
            <CScrollView contentContainerStyle={Styles.screenContainer}>
                <ProfileTile
                    image={Strings.defaultAvatar}
                    title={user?.fullName ?? ''}
                    subtitle='Mobile Developer' />
                <SizedBox height={Sizes.s16} />
                <ListTileText
                    style={styles.item}
                    title={i18n.t('notifications')}
                    subtitle={i18n.t('show_notification')}
                    trailing={<CSwitch initValue={true} />} />
                <CDivider containerHeight={Sizes.s16} />
                <ListTileText
                    style={styles.item}
                    title={i18n.t('dark_theme')}
                    subtitle={isDarkTheme ? 'On' : 'Off'}
                    trailing={<CSwitch
                        initValue={isDarkTheme}
                        onValueChange={(value) => changeTheme(value)} />} />
                <CDivider containerHeight={Sizes.s16} />
                <ListTileText
                    style={styles.item}
                    title={i18n.t('language')}
                    subtitle='English'
                />

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
