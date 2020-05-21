import { StackActions, CommonActions } from '@react-navigation/native';

const navigate = (navigationRef, isMountedRef, name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

const push = (navigationRef, isMountedRef, name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(
      StackActions.push(name, params)
    );
  } else {
  }
}

const replace = (navigationRef, isMountedRef, name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(
      StackActions.replace(name, params)
    );
  } else {
  }
}

const reset = (navigationRef, isMountedRef, name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: name, params: params },
        ],
      })
    );
  } else {
  }
}

export default NavigationUtils = {
  navigate: navigate,
  push: push,
  replace: replace,
  reset: reset,
}