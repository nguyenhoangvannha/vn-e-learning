import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Colors from './src/globals/colors';
import Alignment from './src/globals/alignment';
import ListAuthors from './src/components/Author/ListAuthors/list-authors';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import SignIn from './src/components/Authentication/SignIn/sign-in'
import Home from './src/components/Main/Home/home'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListAuthors/>
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