import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '../../routes/routes';
import Home from './Home/home';
import Browse from './Browse/browse'
import Search from './Search/search'
import IconName from '../../res/icon-name';
import Colors from '../../res/colors';
import { StyleSheet, View } from 'react-native'
import i18n from '../../res/i18n';
import CText from '../Common/Text/c-text';
import Favourites from '../Favourites/favourites';
import { ThemeContext } from '../../provider/theme-provider';
import CIonIcon from '../Common/Icon/c-ion-icon';
import ScreenContainer from '../Common/Screen/screen-container';
import MeScreen from './MyCourses/me-screen';
const Tab = createBottomTabNavigator()

const MainScreen = () => {

    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    return (
        <ScreenContainer>
            <Tab.Navigator
                initialRouteName={Routes.Home}
                screenOptions={screenOptions}
                tabBarOptions={{
                    ...tabBarOptions,
                    activeBackgroundColor: theme.appBarColor,
                    inactiveBackgroundColor: theme.appBarColor,
                }}>
                <Tab.Screen name={Routes.Home} component={Home} />
                <Tab.Screen name={Routes.MeScreen} component={MeScreen} />
                <Tab.Screen name={Routes.Browse} component={Browse} />
                <Tab.Screen name={Routes.Search} component={Search} />
            </Tab.Navigator>
        </ScreenContainer>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    labelStyle: {
        color: Colors.black,
    }
})

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
            case Routes.Home:
                iconName = IconName.mdHome;
                break;
            case Routes.MeScreen:
                iconName = IconName.mdHeart;
                break;
            case Routes.Browse:
                iconName = IconName.iosApps;
                break;
            case Routes.Search:
                iconName = IconName.mdSearch;
                break;
            default:
                iconName = IconName.helpOutline;
                break;
        }
        return <CIonIcon name={iconName} size={size} color={color} />;
    },
    tabBarLabel: ({ focused, color, size }) => {
        let label;

        switch (route.name) {
            case Routes.Home:
                label = i18n.t('home');
                break;
            case Routes.MeScreen:
                label = i18n.t('my_courses');
                break;
            case Routes.Browse:
                label = i18n.t('browse');
                break;
            case Routes.Search:
                label = i18n.t('search');
                break;
            default:
                label = i18n.t('others');
                break;
        }
        return <CText style={styles.labelStyle}>{label}</CText>;
    },
})

const tabBarOptions = {
    activeTintColor: Colors.tomato,
    inactiveTintColor: Colors.gray,
    labelStyle: styles.labelStyle,
};