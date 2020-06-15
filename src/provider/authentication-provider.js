import React, { useState } from 'react'
import usersData from '../data/mock/users-mock-data';

const AuthenticationContext = React.createContext();

const AuthenticationProvider = (props) => {
    const [authentication, setAuthentication] = useState({ status: undefined });

    const [users, setUsers] = useState(usersData)

    const login = (username, password) => {
        var user = users.get(username)
        console.log('login', username, user)
        if (user != undefined && user.password === password) {
            setAuthentication({ status: 200 })
        } else {
            setAuthentication({ status: 404 })
        }
    }

    const addUser = (user) => {
        const newData = usersData.set(user.username, user)
        console.log('addUser', user, newData)
        setUsers(newData)
    }

    return (
        <AuthenticationContext.Provider value={{
            authentication,
            setAuthentication,
            users,
            setUsers,
            addUser,
            login,
        }}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationContext, AuthenticationProvider }