import React, { useState } from 'react'
import {coursesData} from '../data/mock/courses-mock-data'

const CoursesContext = React.createContext()

const CoursesProvider = (props) => {

    const [courses, setCourses] = useState(coursesData)

    return (
        <CoursesContext.Provider value={{courses, setCourses}}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export { CoursesContext, CoursesProvider }
