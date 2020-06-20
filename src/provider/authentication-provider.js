import React, { useState } from 'react'
import usersData from '../data/mock/users-mock-data';

const AuthenticationContext = React.createContext();

const AuthenticationProvider = (props) => {
    const [authentication, setAuthentication] = useState({ status: 0 });

    const [users, setUsers] = useState(usersData)

    const [user, setUser] = useState(undefined)

    const login = (username, password) => {
        var user = users.get(username)
        console.log('login', username, user)
        if (user != undefined && user.password === password) {
            setAuthentication({ status: 200 })
            console.log('user', user)
            setUser(user)
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
            user,
        }}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationContext, AuthenticationProvider }