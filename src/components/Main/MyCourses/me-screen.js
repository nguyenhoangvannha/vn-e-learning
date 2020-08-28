import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ContentContainer from '../../Common/Screen/content-container'
import HomeAppBar from '../../Common/AppBar/home-app-bar'
import i18n from '../../../res/i18n'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Routes from '../../../routes/routes'
import Favourites from '../../Favourites/favourites'
import { ThemeContext } from '../../../provider/theme-provider'
import CText from '../../Common/Text/c-text'
import MyCoursesTab from './my-courses'

const Tab = createMaterialTopTabNavigator()

export default function MeScreen() {
    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    return (
        <ContentContainer style={{backgroundColor: 'white'}}>
            <HomeAppBar title={i18n.t('favourites')} ></HomeAppBar>
            <View style={{height: '100%', backgroundColor: 'white'}}>
                <Tab.Navigator
                    tabBarOptions={{
                        contentContainerStyle: { backgroundColor: theme.tabColor },
                        activeTintColor: theme.textColor,
                        inactiveTintColor: theme.textColor,
                    }}>
                    <Tab.Screen
                        name={Routes.Favourites}
                        component={Favourites}
                        options={{ title: i18n.t('favourites') }} />
                    <Tab.Screen
                        name={Routes.MyCoursesTab}
                        component={MyCoursesTab}
                        options={{ title: i18n.t('my_courses') }} />
                </Tab.Navigator>
            </View>
        </ContentContainer>
    )
}

const styles = StyleSheet.create({})
