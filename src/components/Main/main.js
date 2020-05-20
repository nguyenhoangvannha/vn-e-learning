import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '../../routes/routes';
import Home from './Home/home';
import Downloads from '../Content/Downloads/downloads'
import Browse from './Browse/browse'
import Search from './Search/search'
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconName from '../../res/icon-name';
import Colors from '../../res/colors';
import { StyleSheet } from 'react-native'
import i18n from '../../res/i18n';
import CText from '../Common/Text/c-text';
const Tab = createBottomTabNavigator()

const MainScreen = () => {
    return (
        <Tab.Navigator initialRouteName={Routes.Home} screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name={Routes.Home} component={Home} />
            <Tab.Screen name={Routes.Downloads} component={Downloads} />
            <Tab.Screen name={Routes.Browse} component={Browse} />
            <Tab.Screen name={Routes.Search} component={Search} />
        </Tab.Navigator>
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
            case Routes.Downloads:
                iconName = IconName.iosCloudDownload;
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
        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarLabel: ({ focused, color, size }) => {
        let label;

        switch (route.name) {
            case Routes.Home:
                label = i18n.t('home');
                break;
            case Routes.Downloads:
                label = i18n.t('downloads');
                break;
            case Routes.Browse:
                label = i18n.t('browse');
                break;
            case Routes.Search:
                label = i18n.t('search');
                break;
            default:
                label = i18n.t('home');
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