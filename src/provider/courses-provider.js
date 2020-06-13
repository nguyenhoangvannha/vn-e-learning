import React, { useState } from 'react'
import { coursesData } from '../data/mock/courses-mock-data'

const CoursesContext = React.createContext()

const CoursesProvider = (props) => {

    const [courses, setCourses] = useState(coursesData)

    const [learningCourseIds, setLearningCourseIds] = useState([])

    const [newCourseIds, setNewCourseIds] = useState([])

    const [recommendedCourseIds, setRecommendedCourseIds] = useState([])

    return (
        <CoursesContext.Provider
            value={{
                courses,
                setCourses,
                learningCourseIds,
                setLearningCourseIds,
                recommendedCourseIds,
                setRecommendedCourseIds,
            }}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export { CoursesContext, CoursesProvider }
