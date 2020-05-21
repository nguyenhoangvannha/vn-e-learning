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
import { RootNavigation } from './src/routes/navigations/root-navigation'
import Settings from './src/components/Account/Settings/settings';
import SkillsDetail from './src/components/Skills/SkillDetails/skills-detail';
import CourseDetail from './src/components/Courses/CourseDetail/course-details'
import ListCoursesScreen from './src/components/Courses/ListCoursesScreen/list-courses-screen';
import AllPathsScreen from './src/components/Content/Paths/all-paths-screen';
import { NavigationOptions } from './src/routes/navigation-options';
import { MenuProvider } from 'react-native-popup-menu';
import SendFeedbackScreen from './src/components/Help/Feedback/send-feedback-screen';
import Styles from './src/res/styles/styles';
import Splash from './src/components/SplashSreen/splash';

const Stack = createStackNavigator()

export default function App() {

  React.useEffect(() => {
    RootNavigation.isMountedRef.current = true;

    return () => (RootNavigation.isMountedRef.current = false);
  }, []);

  return (
    <MenuProvider style={Styles.fullScreen}>
      <NavigationContainer ref={RootNavigation.navigationRef}>
        <Stack.Navigator initialRouteName={Routes.Splash}>
          <Stack.Screen name={Routes.Splash} component={Splash} options={NavigationOptions.normalOptions} />
          <Stack.Screen name={Routes.SignIn} component={SignIn} options={NavigationOptions.normalOptions} />
          <Stack.Screen name={Routes.SignUp} component={SignUp} options={NavigationOptions.normalOptions} />
          <Stack.Screen name={Routes.ForgotPassword} component={ForgotPassword} options={NavigationOptions.normalOptions} />
          <Stack.Screen name={Routes.Main} component={MainScreen} options={NavigationOptions.normalOptions} />
          <Stack.Screen name={Routes.CourseDetail} component={CourseDetail} options={NavigationOptions.normalOptions} />
          <Stack.Screen name={Routes.Profile} component={Profile} options={NavigationOptions.normalOptions} />
          <Stack.Screen name={Routes.Settings} component={Settings} options={NavigationOptions.normalOptions} />
          <Stack.Screen name={Routes.SkillsDetail} component={SkillsDetail} options={NavigationOptions.normalOptions} />
          <Stack.Screen name={Routes.ListCoursesScreen} component={ListCoursesScreen} options={NavigationOptions.normalOptions} />
          <Stack.Screen name={Routes.AllPathsScreen} component={AllPathsScreen} options={NavigationOptions.normalOptions} />
          <Stack.Screen name={Routes.SendFeedbackScreen} component={SendFeedbackScreen} options={NavigationOptions.normalOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}