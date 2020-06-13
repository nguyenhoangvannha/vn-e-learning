import React, { PureComponent } from 'react'
import { useState } from 'react'
import authorsData from '../data/mock/authos-mock-data'

const AuthorsContext = React.createContext()

const AuthorsProvider = (props) => {
    const [authors, setAuthors] = useState(authorsData)

    return (
        <AuthorsContext.Provider
            value={{ authors, setAuthors }}>
            {props.children}
        </AuthorsContext.Provider>
    )
}

export {AuthorsContext, AuthorsProvider}