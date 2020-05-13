import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Colors from './src/globals/colors';
import Alignment from './src/globals/alignment';
import ListAuthors from './src/components/Author/ListAuthors/list-authors';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import SignIn from './src/components/Authentication/SignIn/sign-in'
import SignUp from './src/components/Authentication/SignUp/sign-up'
import Home from './src/components/Main/Home/home'
import CourseDetail from './src/components/CourseDetail/course-details';
import coursesData from './src/data/mock/courses-mock-data';
import ForgotPassword from './src/components/Authentication/ForgotPassword/forgot-password'
import MyCourses from './src/components/Main/MyCourses/my-courses';
import Profile from './src/components/Account/Profile/profile';
import Settings from './src/components/Account/Settings/settings';
import Browse from './src/components/Main/Browse/browse';
import EmptyScreen from './src/components/Common/Screen/empty-screen';
import Strings from './src/globals/strings';
import Downloads from './src/components/Content/Downloads/downloads';
import VerifyPassword from './src/components/Authentication/VerifyPassword/verify-password';
import Search from './src/components/Main/Search/search';
import Splash from './src/components/SplashSreen/splash';
import Subscription from './src/components/Subscription/subscription';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/routes/routes';
import CButton from './src/components/Common/Button/c-button';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.ListCourses}>
        <Stack.Screen name={Routes.Home} component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name={Routes.ListCourses} component={ListCourses}
          options={{ title: 'List Courses' }} />
        <Stack.Screen name={Routes.CourseDetail} component={CourseDetail}
          // options={({ route }) => ({ title: route.params.course.name })} 
          options={{ title: 'Course Name', headerBackTitle: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent,
    alignItems: Alignment.center,
    justifyContent: Alignment.center,
  },
});