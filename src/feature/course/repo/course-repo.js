import { apiClient } from "../../axios-config"

const getTotalNumerCourses = () => {
    return apiClient.get('course/total-number');
}

const getTopNewCourses = () => {
    return apiClient.post('course/top-new', {
        "limit": 10,
        "page": 1
    });
}

const getTopSellCourses = () => {
    return apiClient.post('course/top-sell', {
        "limit": 10,
        "page": 1
    });
}

const getTopRateCourses = () => {
    return apiClient.post('course/top-rate', {
        "limit": 10,
        "page": 1
    });
}

const CourseRepo = {
    getTotalNumerCourses: getTotalNumerCourses,
    getTopNewCourses: getTopNewCourses,
    getTopSellCourses: getTopSellCourses,
    getTopRateCourses: getTopRateCourses,
}

export {
    CourseRepo
}