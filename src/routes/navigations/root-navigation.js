import * as React from 'react';

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