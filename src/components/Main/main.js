import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '../../routes/routes';
import Home from './Home/home';
import Downloads from '../Content/Downloads/downloads'
import Browse from './Browse/browse'
import Search from './Search/search'
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconName from '../../globals/icon-name';
import Colors from '../../globals/colors';

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
})

const tabBarOptions = {
    activeTintColor: Colors.tomato,
    inactiveTintColor: Colors.gray,
};