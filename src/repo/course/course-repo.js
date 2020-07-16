import { apiClient } from "../axios-config"

const getTotalNumerCourses = () => {
    return apiClient.get('course/total-number');
}

const CourseRepo = {
    getTotalNumerCourses: getTotalNumerCourses,
}

export {
    CourseRepo
}