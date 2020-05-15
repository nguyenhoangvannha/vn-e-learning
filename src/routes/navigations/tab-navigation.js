import React from 'react'

export const tabNavigationRef = React.createRef()
export const isTabMountedRef = React.createRef();

export function navigate(name, params) {
    if (isTabMountedRef.current && tabNavigationRef.current) {
      // Perform navigation if the app has mounted
      tabNavigationRef.current.navigate(name, params);
    } else {
      // You can decide what to do if the app hasn't mounted
      // You can ignore this, or add these actions to a queue you can call later
    }
  }
