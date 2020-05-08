import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import SignIn from './src/components/Authentication/SignIn/sign-in';
import Colors from './src/globals/colors';
import Alignment from './src/globals/alignment';
import SignUp from './src/components/Authentication/SignUp/sign-up';
import ForgotPassword from './src/components/Authentication/ForgotPassword/forgot-password';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ForgotPassword/>
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