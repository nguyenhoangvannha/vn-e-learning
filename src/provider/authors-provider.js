import React, { PureComponent } from 'react'
import { useState } from 'react'
import authorsData from '../data/mock/authos-mock-data'

const AuthorsContext = React.createContext()

const AuthorsProvider = (props) => {
    const [authors, setAuthors] = useState(authorsData)

    const [authorIds] = useState(Array.from(authors.keys()))

    return (
        <AuthorsContext.Provider
            value={{ authors, setAuthors , authorIds}}>
            {props.children}
        </AuthorsContext.Provider>
    )
}

export {AuthorsContext, AuthorsProvider}