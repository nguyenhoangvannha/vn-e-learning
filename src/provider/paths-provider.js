import React, { useState } from 'react'
import pathsData from '../data/mock/paths-mock-data'

const PathsContext = React.createContext()

const PathsProvider = (props) => {
    const [paths, setPaths] = useState(pathsData)

    const [pathIds] = useState(Array.from(paths.keys()))

    return (
        <PathsContext.Provider
            value={{ paths, setPaths, pathIds }}>
            {props.children}
        </PathsContext.Provider>
    )
}

export { PathsContext, PathsProvider }