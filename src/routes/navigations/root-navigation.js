import * as React from 'react';
import { StackActions } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

export const rootNavigationRef = React.createRef();
export const isRootMountedRef = React.createRef();

export function navigate(name, params) {
  if (isRootMountedRef.current && rootNavigationRef.current) {
    // Perform navigation if the app has mounted
    rootNavigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function replace(name, params) {
  if (isRootMountedRef.current && rootNavigationRef.current) {
    // Perform navigation if the app has mounted
    rootNavigationRef.current.dispatch(
      StackActions.replace(name, params)
    );
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function reset(name, params) {
  if (isRootMountedRef.current && rootNavigationRef.current) {
    // Perform navigation if the app has mounted
    rootNavigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: name , params: params},
        ],
      })
    );
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export const RootNavigation = {
  ref: rootNavigationRef,
  navigate: navigate,
  replace: replace,
  reset: reset,
}