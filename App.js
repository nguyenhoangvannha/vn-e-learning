import React from 'react';
import SignIn from './src/components/Authentication/SignIn/sign-in'
import SignUp from './src/components/Authentication/SignUp/sign-up'
import ForgotPassword from './src/components/Authentication/ForgotPassword/forgot-password'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/routes/routes';
import MainScreen from './src/components/Main/main';
import Profile from './src/components/Account/Profile/profile'

import { rootNavigationRef, isRootMountedRef } from './src/routes/navigations/root-navigation'
import Settings from './src/components/Account/Settings/settings';
import SkillsDetail from './src/components/Skills/SkillDetails/skills-detail';
import CourseDetail from './src/components/Courses/CourseDetail/course-details'
import ListCoursesScreen from './src/components/Courses/ListCoursesScreen/list-courses-screen';
import AllPathsScreen from './src/components/Content/Paths/all-paths-screen';

const Stack = createStackNavigator()

export default function App() {

  React.useEffect(() => {
    isRootMountedRef.current = true;

    return () => (isRootMountedRef.current = false);
  }, []);
  
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <Stack.Navigator initialRouteName={Routes.SignIn}>
        <Stack.Screen name={Routes.SignIn} component={SignIn} options={{ headerShown: false, }} />
        <Stack.Screen name={Routes.SignUp} component={SignUp} options={{ headerShown: false, }} />
        <Stack.Screen name={Routes.ForgotPassword} component={ForgotPassword} options={{ headerShown: false, }} />
        <Stack.Screen name={Routes.Main} component={MainScreen} options={{ headerShown: false, }} />
        <Stack.Screen name={Routes.CourseDetail} component={CourseDetail} options={{ headerShown: true, }} />
        <Stack.Screen name={Routes.Profile} component={Profile} options={{ headerShown: false, }} />
        <Stack.Screen name={Routes.Settings} component={Settings} options={{ headerShown: false, }} />
        <Stack.Screen name={Routes.SkillsDetail} component={SkillsDetail} options={{ headerShown: false, }} />
        <Stack.Screen name={Routes.ListCoursesScreen} component={ListCoursesScreen} options={{ headerShown: false, }} />
        <Stack.Screen name={Routes.AllPathsScreen} component={AllPathsScreen} options={{ headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}