import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Home from './src/components/Main/Home/home';
import SignIn from './src/components/Authentication/SignIn/sign-in';
import Colors from './src/globals/colors';
import Alignment from './src/globals/alignment';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignIn></SignIn>
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
