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

const getCourseDetail = (courseId, userId) => {
    return apiClient.get(`course/get-course-detail/${courseId}/${userId}`, {
        
    });
}

const getRecommendCourses = (userId, limit, offset) => {
    return apiClient.get(`user/recommend-course/${userId}/${limit}/${offset}`, {
        
    });
}

const CourseRepo = {
    getTotalNumerCourses: getTotalNumerCourses,
    getTopNewCourses: getTopNewCourses,
    getTopSellCourses: getTopSellCourses,
    getTopRateCourses: getTopRateCourses,
    getCourseDetail: getCourseDetail,
    getRecommendCourses: getRecommendCourses,
}

export {
    CourseRepo
}