import React, { PureComponent } from 'react'

const SnackbarContext = React.createContext()

const SnackbarProvider = (props) => {
    return (
        <SnackbarContext.Provider>
            {props.children}
        </SnackbarContext.Provider>
    )
}