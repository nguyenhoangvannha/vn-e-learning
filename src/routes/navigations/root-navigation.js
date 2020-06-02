import * as React from 'react';
import NavigationUtils from '../navigation-utils'

const rootNavigationRef = React.createRef();
const isRootMountedRef = React.createRef();

const navigate = (name, params) => {
  NavigationUtils.navigate(rootNavigationRef, isRootMountedRef, name, params);
}

const push = (name, params) => {
  NavigationUtils.push(rootNavigationRef, isRootMountedRef, name, params);
}

const replace = (name, params) => {
  NavigationUtils.replace(rootNavigationRef, isRootMountedRef, name, params);
}

const reset = (name, params) => {
  NavigationUtils.reset(rootNavigationRef, isRootMountedRef, name, params);
}

const goBack = () => {
  NavigationUtils.goBack(rootNavigationRef, isRootMountedRef);
}

export const RootNavigation = {
  navigationRef: rootNavigationRef,
  isMountedRef: isRootMountedRef,
  navigate: navigate,
  push: push,
  replace: replace,
  reset: reset,
  goBack: goBack,
}