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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Settings/>
    </SafeAreaView>
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