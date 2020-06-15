import React, { useState } from 'react'
import { coursesData, newCourses, recommendedCourses } from '../data/mock/courses-mock-data'

const CoursesContext = React.createContext()

const CoursesProvider = (props) => {

    const [courses, setCourses] = useState(coursesData)

    const [courseIds, setCourseIds] = useState(Array.from(courses.keys()))

    const [learningCourseIds, setLearningCourseIds] = useState(new Set())

    const [newReleaseCourseIds, setNewReleaseCourseIds] = useState(newCourses)

    const [recommendedCourseIds, setRecommendedCourseIds] = useState(recommendedCourses)

    function addLearningCourse(courseId) {
        console.log('addLearningCourse', courseId, learningCourseIds)
        var newData = new Set(learningCourseIds.add(courseId))
        setLearningCourseIds(newData)
    }

    return (
        <CoursesContext.Provider
            value={{
                courses,
                setCourses,
                learningCourseIds,
                setLearningCourseIds,
                newReleaseCourseIds,
                setNewReleaseCourseIds,
                recommendedCourseIds,
                setRecommendedCourseIds,
                addLearningCourse,
                courseIds,
            }}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export { CoursesContext, CoursesProvider }
