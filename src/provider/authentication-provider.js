import React, { useState } from 'react'

const AuthenticationContext = React.createContext();

const AuthenticationProvider = (props) => {
    const [authentication, setAuthentication] = useState({status: undefined});

    return (
        <AuthenticationContext.Provider value={{ authentication, setAuthentication }}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationContext, AuthenticationProvider }